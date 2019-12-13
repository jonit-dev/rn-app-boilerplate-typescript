import { Alert, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { APIHelper } from '../../helpers/APIHelper';
import { TS } from '../../helpers/LanguageHelper';
import NavigationHelper from '../../helpers/NavigationHelper';
import { PushNotificationHelper } from '../../helpers/PushNotificationHelper';
import { IRequestDefaultError, RequestTypes } from '../../typescript/Requests.types';
import { persistor } from '../persist.store';
import { USER_LOGIN, USER_LOGOUT, USER_REFRESH_INFO } from '../reducers/user.reducer';
import { showMessage } from './ui.actions';

export enum AuthType {
  EmailPassword = "EmailPassword",
  GoogleOAuth = "GoogleOAuth",
  FacebookOAuth = "FacebookOAuth"
}

export interface ICredentials {
  email: string;
  password: string;
}

export interface IGoogleAuthPayload {
  idToken: string | null;
  appClientId: string;
}

export interface IFacebookAuthPayload {
  accessToken: string;
}

export interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const userLogin = (
  payload: ICredentials | IGoogleAuthPayload | IFacebookAuthPayload,
  navigation,
  type: AuthType = AuthType.EmailPassword
) => async (dispatch: any) => {
  try {
    let response;

    if (type === AuthType.EmailPassword) {
      response = await APIHelper.request(
        RequestTypes.POST,
        "/users/login",
        payload,
        false
      );
    }

    if (type === AuthType.FacebookOAuth) {
      response = await APIHelper.request(
        RequestTypes.POST,
        "/users/login/facebook-oauth",
        payload,
        false
      );
    }

    if (type === AuthType.GoogleOAuth) {
      response = await APIHelper.request(
        RequestTypes.POST,
        "/users/login/google-oauth",
        payload,
        false
      );
    }

    if (response) {
      if (response.data.error) {
        dispatch(
          showMessage({
            message: response.data.error
          })
        );

        return;
      }
      if (response.data.token) {
        // refresh push token

        const user = response.data.user;

        // Verify user's current push token and tries to refresh it if needed...
        PushNotificationHelper.checkAndRefreshPushToken(user.pushToken);

        navigation.navigate(
          NavigationActions.navigate({
            routeName: "App",
            action: NavigationActions.navigate({ routeName: "DashboardScreen" })
          })
        );
      }

      dispatch({ type: USER_LOGIN, payload: response.data });
    }
  } catch (error) {
    console.error(error);
  }
};

export const userLogout = () => async dispatch => {
  console.log("Logging out user");

  await persistor.purge();

  await AsyncStorage.clear();

  await dispatch({ type: USER_LOGOUT });

  NavigationHelper.navigate("LoginScreen", null);
};

export const userRegister = (
  registerCredentials: IRegisterCredentials,
  navigation: any
) => async (dispatch: any) => {
  try {
    const response: any = await APIHelper.request(
      RequestTypes.POST,
      "/users",
      registerCredentials,
      false
    );

    if (response.status === 201) {
      // success
      const user = response.data.user;

      Alert.alert(
        TS.string("account", "loginSuccessTitle"),
        TS.string("account", "registerSuccess")
      );

      await dispatch(
        userLogin(
          {
            email: user.email,
            password: registerCredentials.password
          },
          navigation
        )
      );
    } else {
      const error: IRequestDefaultError = response.data;

      Alert.alert(TS.string("global", "genericErrorTitle"), error.message);
    }
  } catch (error) {
    console.error(error);
  }
};

export const userGetProfileInfo = () => async dispatch => {
  console.log("getting profile info...");
  const response = await APIHelper.request(
    RequestTypes.GET,
    "/users/profile",
    {},
    true
  );

  if (response) {
    if (response.data.user) {
      // Refresh push notifications
      PushNotificationHelper.checkAndRefreshPushToken(
        response.data.user.pushToken
      );

      console.log("User profile info refreshed!");
      dispatch({
        type: USER_REFRESH_INFO,
        payload: {
          user: response.data.user,
          token: response.data.token
        }
      });
    }
  }
};
