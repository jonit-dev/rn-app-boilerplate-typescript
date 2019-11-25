import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { colors } from '../../../constants/UI/Colors.constant';
import { defaultFont } from '../../../constants/UI/Typography.constant';
import { DashboardScreen } from '../../../screens/Dashboard.screen';
import { ProfileScreen } from '../../../screens/user/Profile.screen';
import { CustomDrawerContentComponent } from './CustomDrawerContentComponent';

const WIDTH = Dimensions.get("window").width;

export const DashboardDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashboardScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    drawerWidth: WIDTH * 0.83,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.white,
      // activeBackgroundColor: colors.lightGreen,
      labelStyle: {
        fontFamily: defaultFont
      }
    }
  }
);
