import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { APIHelper } from '../helpers/APIHelper';
import { PushNotificationHelper } from '../helpers/PushNotificationHelper';
import { RequestTypes } from '../typescript/Requests.types';

export const InitialScreen = props => {
  // Check user token

  const userToken = useSelector<any, any>(state => state.userReducer.token);
  const user = useSelector<any, any>(state => state.userReducer.user);

  const savePushToken = async devicePushToken => {
    const response = await APIHelper.request(
      RequestTypes.POST,
      "/users/push-notification",
      {
        pushToken: devicePushToken
      },
      true
    );

    if (response) {
      if (response.status === 200) {
        console.log("Push notification saved successfully.");
      } else {
        console.log(response.data.message);
      }
    }
  };

  useEffect(() => {
    async function pushInit() {
      const savedPushToken = user.pushToken;

      console.log("Refreshing registered token");
      const devicePushToken = await PushNotificationHelper.getPushToken();
      console.log(devicePushToken);

      // check if our current push token is different from our saved one

      if (!savedPushToken) {
        savePushToken(devicePushToken);
        return;
      }

      if (devicePushToken !== savedPushToken) {
        // it means that we have an outdated saved push token in our back-end. So let's update it!
        savePushToken(devicePushToken);
      } else {
        console.log(
          "User push notification token is already updated. Skipping saving to server."
        );
      }
    }
    if (user) {
      // if there's an user logged in...
      pushInit();
    }
  }, []);

  props.navigation.navigate(userToken ? "App" : "Auth");

  return null;
};
