import { Alert } from 'react-native';

import { APIHelper } from '../../helpers/APIHelper';
import { USER_LOGIN } from '../reducers/user.reducer';

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

export const userLogin = (credentials: ICredentials) => async (
  dispatch: any
) => {
  try {
    const response = await APIHelper.request(
      "post",
      "/users/login",
      credentials,
      false
    );

    if (response) {
      if (response.data.error) {
        Alert.alert("Failed!", response.data.error);
        return;
      }

      if (response.data.token) {
        Alert.alert("Success", "logged in");
      }

      dispatch({ type: USER_LOGIN, payload: response.data });
    }
  } catch (error) {
    console.error(error);
  }
};

export const userRegister = (
  registerCredentials: IRegisterCredentials
) => async dispatch => {
  try {
    console.log(registerCredentials);

    const response: any = await APIHelper.request(
      "post",
      "/users",
      registerCredentials,
      false
    );

    if (response.status === 201) {
      // user registered successfully
      dispatch({ type: USER_LOGIN, payload: response.data });
    }

    return response;
  } catch (error) {
    console.error(error);
  }
};
