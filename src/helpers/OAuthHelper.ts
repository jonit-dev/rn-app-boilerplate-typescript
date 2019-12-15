import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import { Platform } from 'react-native';

import { appEnv } from '../constants/Env.constant';
import { IGoogleAuthPayload } from '../store/actions/user.actions';

export class OAuthHelper {

  public static googleLogin = async (): Promise<IGoogleAuthPayload> => {
    try {
      const result = await Google.logInAsync({
        clientId: appEnv.oauth.google.androidClientId,
        androidClientId: appEnv.oauth.google.androidClientId,
        iosClientId: appEnv.oauth.google.iosClientId,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        return {
          idToken: result.idToken,
          appClientId:
            Platform.OS === "android"
              ? appEnv.oauth.google.androidClientId
              : appEnv.oauth.google.iosClientId
        }
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }

  public static facebookLogin = async ()  => {

    console.log("Logging in with facebook");

    try {
      await Facebook.initializeAsync(
        appEnv.oauth.facebook.appId,
        appEnv.oauth.facebook.appName
      );

      const {
        type,
        token,
        // expires
      } = await Facebook.logInWithReadPermissionsAsync(
        appEnv.oauth.facebook.appId,
        // @ts-ignore
        {
          permissions: ["public_profile", "email"]
        }
      );

      const accessToken = token;

      // console.log({ type, token, expires });

      if (type === "success") {
       return {
         accessToken
        }
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);

    }
  }



}