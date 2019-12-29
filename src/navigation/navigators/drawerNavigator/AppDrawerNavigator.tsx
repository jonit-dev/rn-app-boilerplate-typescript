import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { colors } from '../../../constants/UI/Colors.constant';
import { defaultFont } from '../../../constants/UI/Typography.constant';
import { MyAccountScreen } from '../../../screens/App/MyAccount.screen';
import { ProfileScreen } from '../../../screens/App/Profile.screen';
import { BottomTabNavigator } from '../bottomTabNavigator/BottomTabNavigator';
import { CustomDrawerContentComponent } from './CustomDrawerContentComponent';

const WIDTH = Dimensions.get("window").width;

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Feed: {
      screen: BottomTabNavigator,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="rss-feed" size={24} color={colors.white} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="assignment" size={24} color={colors.white} />
        )
      }
    },
    "My Account": {
      screen: MyAccountScreen,
      navigationOptions: {
        drawerIcon: () => (
          <MaterialIcons name="account-circle" size={24} color={colors.white} />
        )
      }
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
