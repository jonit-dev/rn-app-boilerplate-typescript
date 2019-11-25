import { createStackNavigator } from 'react-navigation-stack';

import { defaultStackNavigationOptions } from '../../constants/Navigator.constants';
import { LoginScreen } from '../../screens/account/Login.screen';
import { RegisterScreen } from '../../screens/account/Register.screen';

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
    }
  },
  defaultStackNavigationOptions
);
