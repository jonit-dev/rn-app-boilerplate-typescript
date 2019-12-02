import { Alert, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { APIHelper } from '../../helpers/APIHelper';
import { TS } from '../../helpers/LanguageHelper';
import { PushNotificationHelper } from '../../helpers/PushNotificationHelper';
import { IRequestDefaultError, RequestTypes } from '../../typescript/Requests.types';
import { persistor } from '../persist.store';
import { USER_LOGIN, USER_LOGOUT, USER_REFRESH_INFO } from '../reducers/user.reducer';
import { showMessage } from './ui.actions';

export interface ICredentials {
  email: string;
  password: string;
}

export interface IRegisterCredentials {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const userRefreshPushToken = () => async (dispatch, getState) => {
  // Refresh user's token
  const user = getState().userReducer.user;

  const savedPushToken = user.pushToken;

  console.log("User login... refreshing token!");
  console.log(savedPushToken);
  console.log(user);

  const devicePushToken = await PushNotificationHelper.getPushToken();

  if (!savedPushToken) {
    console.log("User do not have a registered push token. Saving one...");
    PushNotificationHelper.storePushToken(devicePushToken);
    return;
  }

  // it means that we have an outdated saved push token in our back-end. So let's update it!
  if (devicePushToken !== savedPushToken) {
    // it means that we have an outdated saved push token in our back-end. So let's update it!
    PushNotificationHelper.storePushToken(devicePushToken);
  } else {
    console.log(
      "User push notification token is already updated. Skipping saving to server."
    );
  }
};

export const userLogin = (credentials: ICredentials, navigation) => async (
  dispatch: any
) => {
  try {
    const response = await APIHelper.request(
      RequestTypes.POST,
      "/users/login",
      credentials,
      false
    );

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

      // dispatch(userRefreshPushToken());
    }
  } catch (error) {
    console.error(error);
  }
};

export const userLogout = navigation => async dispatch => {
  console.log("Logging out user");

  await persistor.purge();

  await AsyncStorage.clear();

  await dispatch({ type: USER_LOGOUT });

  navigation.navigate(
    NavigationActions.navigate({
      routeName: "Auth",
      action: NavigationActions.navigate({ routeName: "LoginScreen" })
    })
  );
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
      dispatch({ type: USER_LOGIN, payload: response.data });
      Alert.alert(
        TS.string("account", "loginSuccessTitle"),
        TS.string("account", "registerSuccess")
      );

      navigation.navigate(
        NavigationActions.navigate({
          routeName: "App",
          action: NavigationActions.navigate({ routeName: "DashboardScreen" })
        })
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
