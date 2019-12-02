import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { colors } from '../../../constants/UI/Colors.constant';
import { defaultFont } from '../../../constants/UI/Typography.constant';
import { DashboardScreen } from '../../../screens/Dashboard/Dashboard/BottomTabs/Dashboard.screen';
import { MoreScreen } from '../../../screens/Dashboard/Dashboard/BottomTabs/More.screen';
import { SettingsScreen } from '../../../screens/Dashboard/Dashboard/BottomTabs/Settings.screen';

export const DashboardBottomTabNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="account-circle" size={24} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="settings" size={24} color={tintColor} />
        )
      }
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="more-horiz" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: colors.primary,
      activeBackgroundColor: colors.white,
      inactiveBackgroundColor: colors.white,
      inactiveTintColor: colors.gray,
      // activeBackgroundColor: colors.lightGreen,
      labelStyle: {
        fontFamily: defaultFont
      }
    }
  }
);
