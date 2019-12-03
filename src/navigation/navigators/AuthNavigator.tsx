import { createStackNavigator } from 'react-navigation-stack';

import { defaultStackNavigationOptions } from '../../constants/Navigator.constants';
import { ChangePasswordScreen } from '../../screens/Auth/ChangePassword.screen';
import { ForgotPasswordScreen } from '../../screens/Auth/ForgotPassword.screen';
import { LoginScreen } from '../../screens/Auth/Login.screen';
import { RegisterScreen } from '../../screens/Auth/Register.screen';

export const AuthStackNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        header: null // hide navigation bar on this screen only
      }
    },
    RegisterScreen: {
      screen: RegisterScreen
    },
    ForgotPasswordScreen: {
      screen: ForgotPasswordScreen
    },
    ChangePasswordScreen: {
      screen: ChangePasswordScreen
    }
  },
  defaultStackNavigationOptions
);
