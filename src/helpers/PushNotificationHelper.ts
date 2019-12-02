import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import { RequestTypes } from '../typescript/Requests.types';
import { APIHelper } from './APIHelper';

export class PushNotificationHelper {
  public static async checkAndRefreshPushToken(savedPushToken: string) {
    console.log("Trying to refresh user's push notification...");
    const devicePushToken = await PushNotificationHelper.getPushToken();

    // if user does not have a push token currently registered, lets try to register it.
    if (!savedPushToken) {
      await PushNotificationHelper.storePushToken(devicePushToken);
    } else if (devicePushToken !== savedPushToken) {
      // if current device's push token is not in sync with what we have saved in database, let's refresh it.
      await PushNotificationHelper.storePushToken(devicePushToken);
    } else {
      console.log(`User's push notification is in sync with database`);
    }
  }

  public static async getPushToken() {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      return false;
    }

    // Get the token that uniquely identifies this device
    const pushToken = await Notifications.getExpoPushTokenAsync();

    return pushToken;
  }

  public static async storePushToken(devicePushToken) {
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
        console.log("Push notification token saved successfully.");
      } else {
        console.log(response.data.message);
      }
    }
  }
}
