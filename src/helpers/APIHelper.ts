import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { Alert } from 'react-native';

import { appEnv } from '../constants/Env.constant';

const AUTH_HEADERS = {
  Authorization: "Bearer TOKENHERE",
  "Content-type": "application/json"
};

const GUEST_HEADERS = {
  "Content-type": "application/json"
};

export class APIHelper {
  public static request = async (
    method,
    url,
    data,
    customHeaders,
    useAuth = true,
    onTimeoutCallback = null,
    timeout = 5000
  ) => {
    try {
      const netInfo = await NetInfo.fetch();

      if (!netInfo.isConnected) {
        // Check if user has wifi / mobile connection turned on.
        Alert.alert("Oops!", "Please turn on your mobile connection.");
        return;
      } else {
        // prepare connection timeout callback
        const abort = axios.CancelToken.source();

        const timeoutCallback = setTimeout(() => {
          abort.cancel(`Timeout of ${timeout}ms.`);
          if (onTimeoutCallback) {
            onTimeoutCallback();
          } else {
            Alert.alert(
              "Request timeout",
              "Server is probably offline. Please, try again later."
            );
          }
        }, timeout);

        // execute request
        const response = await axios({
          method,
          url: `${appEnv.serverUrl}${url}`,
          data,
          cancelToken: abort.token,
          validateStatus(status) {
            return status >= 200 && status <= 500; // default
          },
          headers: useAuth
            ? { ...AUTH_HEADERS, ...customHeaders }
            : { ...GUEST_HEADERS, ...customHeaders }
        });

        clearTimeout(timeoutCallback);
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };
}
