import { Alert } from 'react-native';

import { APIHelper } from '../../helpers/APIHelper';
import { USER_LOGIN } from '../reducers/user.reducer';

export interface ICredentials {
  email: string;
  password: string;
}

export const userLogin = (credentials: ICredentials) => async dispatch => {
  try {
    const response = await APIHelper.request(
      "post",
      "/users/login",
      credentials,
      null,
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

      dispatch({ type: USER_LOGIN, payload: response });
    }
  } catch (error) {
    console.error(error);
  }
};
