import axios from 'axios';
import { Alert } from 'react-native';

import { env } from '../../constants/Env.constant';
import { USER_LOGIN } from '../reducers/user.reducer';

export interface ICredentials {
  email: string;
  password: string;
}

export const userLogin = (credentials: ICredentials) => async dispatch => {
  console.log("logging user...");
  console.log(credentials);

  try {
    const response = await axios({
      method: "post",
      url: `${env.serverUrl}/users/login`,
      data: credentials,
      validateStatus(status) {
        return status <= 500;
      },
      headers: {
        "Content-Type": "application/json"
      }
    });

    dispatch({ type: USER_LOGIN, payload: response.data });

    return response;
  } catch (err) {
    const errorObject = JSON.parse(JSON.stringify(err));
    console.log(errorObject);

    Alert.alert("Oops!", err);
  }
};
