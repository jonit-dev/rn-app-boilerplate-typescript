import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '../constants/UI/Colors.constant';
import { LoginScreen } from '../screens/account/Login.screen';
import { RegisterScreen } from '../screens/account/Register.screen';
import { DashboardScreen } from '../screens/Dashboard.screen';
import { InitialScreen } from '../screens/Initial.screen';

const MainNavigator = createStackNavigator(
  {
    InitialScreen: {
      screen: InitialScreen
    },

    DashboardScreen: {
      screen: DashboardScreen
    },

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
