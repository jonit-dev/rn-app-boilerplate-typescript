import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { APIHelper } from '../../helpers/APIHelper';
import { IRequestDefaultError, RequestTypes } from '../../typescript/Requests.types';
import { USER_LOGIN } from '../reducers/user.reducer';
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

export const userRegister = (
  registerCredentials: IRegisterCredentials
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
      Alert.alert("Success", "registered!");
    } else {
      const error: IRequestDefaultError = response.data;

      Alert.alert(error.status, error.message);
    }
  } catch (error) {
    console.error(error);
  }
};
