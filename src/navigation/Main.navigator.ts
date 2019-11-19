import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '../constants/UI/Colors.constant';
import { LoginScreen } from '../screens/account/Login.screen';
import { RegisterScreen } from '../screens/account/Register.screen';

const MainNavigator = createStackNavigator(
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
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: "white"
    }
  }
);

// tslint:disable-next-line: no-default-export
export default createAppContainer(MainNavigator);
