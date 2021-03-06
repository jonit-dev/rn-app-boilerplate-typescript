import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { Alert, AsyncStorage } from 'react-native';

import { appEnv } from '../constants/Env.constant';
import { persistor } from '../store/persist.store';
import { TS } from './LanguageHelper';
import NavigationHelper from './NavigationHelper';

export class APIHelper {
  public static request = async (
    method: any,
    url: string,
    data: object,
    useAuth = true,
    customHeaders: object = {},
    onTimeoutCallback = () => null,
    timeout = 5000
  ) => {
    let AUTH_HEADERS;
    try {
      if (useAuth) {
        const token = await AsyncStorage.getItem("token");

        AUTH_HEADERS = {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json"
        };
      }

      const GUEST_HEADERS = {
        "Content-type": "application/json"
      };

      const netInfo = await NetInfo.fetch();

      if (!netInfo.isConnected) {
        // Check if user has wifi / mobile connection turned on.
        Alert.alert(
          TS.string("global", "networkErrorTitle"),
          TS.string("global", "networkErrorMessage")
        );

        // move to login screen, if user is not there yet
        NavigationHelper.navigate("LoginScreen", null);

        return;
      } else {
        // prepare connection timeout callback
        const abort = axios.CancelToken.source();

        const timeoutCallback = setTimeout(() => {
          abort.cancel(`Timeout of ${timeout}ms.`);
          if (onTimeoutCallback() !== null) {
            onTimeoutCallback();
          } else {
            Alert.alert(
              TS.string("global", "requestTimeoutTitle"),
              TS.string("global", "requestTimeoutMessage")
            );
          }
        }, timeout);

        console.log(`Request to: ${appEnv.serverUrl}${url}`);

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

        // If user is not authenticated...
        // 401 = Unauthorized status
        if (response.status === 401) {
          console.log("User is not authenticated. Redirecting to Login...");
          // clear current redux store
          persistor.purge();

          Alert.alert(
            TS.string("account", "loginAuthenticationError"),
            TS.string("account", "loginUserNotAuthenticated")
          );
          NavigationHelper.navigate("Auth", null);
        }

        clearTimeout(timeoutCallback);

        return response;
      }
    } catch (error) {
      console.log(error);
    }
  };
}
