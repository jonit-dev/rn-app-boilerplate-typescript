import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { colors } from '../../../constants/UI/Colors.constant';
import { defaultFont } from '../../../constants/UI/Typography.constant';
import { FeedScreen } from '../../../screens/App/BottomTabs/Feed/Feed.screen';
import { SettingsScreen } from '../../../screens/App/BottomTabs/Settings.screen';
import { ChatStackNavigator } from './ChatStackNavigator/ChatStackNavigator';

export const BottomTabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="rss-feed" size={24} color={tintColor} />
        )
      }
    },
    Chat: {
      screen: ChatStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
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
