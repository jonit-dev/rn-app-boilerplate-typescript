import { Alert } from 'react-native';

import { RequestTypes } from '../typescript/Requests.types';
import { APIHelper } from './APIHelper';
import { TS } from './LanguageHelper';
import NavigationHelper from './NavigationHelper';

export interface IChangePasswordPayload {
  email: string;
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;
}

export class UserHelper {
  public static async changeUserPassword(payload: IChangePasswordPayload) {
    const response = await APIHelper.request(
      RequestTypes.POST,
      "/users/change-password",
      payload,
      false
    );

    if (response) {
      if (response.status === 200) {
        Alert.alert(
          TS.string("global", "genericSuccessTitle"),
          response.data.message
        );

        NavigationHelper.navigate("LoginScreen", null);
      } else {
        Alert.alert(
          TS.string("global", "genericErrorTitle"),
          response.data.message
        );
      }
    }

    console.log(response);
  }
}
