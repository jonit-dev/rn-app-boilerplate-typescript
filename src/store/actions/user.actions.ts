import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { APIHelper } from '../../helpers/APIHelper';
import { TS } from '../../helpers/LanguageHelper';
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

export const userLogout = navigation => async dispatch => {
  console.log("Logging out user");

  persistor.purge();

  navigation.navigate(
    NavigationActions.navigate({
      routeName: "Auth",
      action: NavigationActions.navigate({ routeName: "LoginScreen" })
    })
  );

  dispatch({ type: USER_LOGOUT });
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
    console.log("got profile info!");
    console.log(response.data);
    dispatch({
      type: USER_REFRESH_INFO,
      payload: {
        user: response.data.user
      }
    });
  }
  return false;
};
