import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { colors } from '../constants/UI/Colors.constant';
import { defaultFont } from '../constants/UI/Typography.constant';
import { CustomDrawerContentComponent } from './drawerNavigator/CustomDrawerContentComponent';
import { MainStackNavigator } from './stackNavigators/mainStackNavigator';
import { ProfileStackNavigator } from './stackNavigators/ProfileStackNavigator';

const WIDTH = Dimensions.get("window").width;

const MainDrawerNavigator = createDrawerNavigator(
  {
    Main: MainStackNavigator,
    Profile: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        drawerLabel: "Profile"
      }
    }
  },
  {
    drawerWidth: WIDTH * 0.83,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: colors.accent,
      labelStyle: {
        fontFamily: defaultFont
      }
    }
  }
);

// tslint:disable-next-line: no-default-export
export default createAppContainer(MainDrawerNavigator);
