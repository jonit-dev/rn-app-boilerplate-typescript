import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { defaultStackNavigationOptions } from '../../../constants/Navigator.constants';
import { colors } from '../../../constants/UI/Colors.constant';
import { defaultFont } from '../../../constants/UI/Typography.constant';
import { ChatScreen } from '../../../screens/Dashboard/Dashboard/BottomTabs/Chat/Chat.screen';
import { IndividualChatScreen } from '../../../screens/Dashboard/Dashboard/BottomTabs/Chat/IndividualChat.screen';
import { DashboardScreen } from '../../../screens/Dashboard/Dashboard/BottomTabs/Dashboard.screen';
import { SettingsScreen } from '../../../screens/Dashboard/Dashboard/BottomTabs/Settings.screen';

const ChatStackNavigator = createStackNavigator(
  {
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        header: null // hide navigation bar on this screen only
      }
    },

    IndividualChat: {
      screen: IndividualChatScreen,
      navigationOptions: {
        title: "Individual Chat Title"
      }
    }
  },
  defaultStackNavigationOptions
);

export const DashboardBottomTabNavigator = createBottomTabNavigator(
  {
    Chat: {
      screen: ChatStackNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatboxes" size={24} color={tintColor} />
        )
      }
    },

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
