import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PushNotificationHelper } from '../helpers/PushNotificationHelper';

export const InitialScreen = props => {
  // Check user token

  const userToken = useSelector<any, any>(state => state.userReducer.token);

  useEffect(() => {
    async function pushInit() {
      console.log("Trying to get push permissions...");
      const pushToken = await PushNotificationHelper.getPushToken();
      console.log(pushToken);
    }
    pushInit();
  }, []);

  props.navigation.navigate(userToken ? "App" : "Auth");

  return null;
};
