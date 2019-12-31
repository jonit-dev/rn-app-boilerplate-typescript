import { createStackNavigator } from 'react-navigation-stack';

import { defaultStackNavigationOptions } from '../../../constants/Navigator.constants';
import { ChatScreen } from '../../../screens/App/BottomTabs/Chat/Chat.screen';
import { IndividualChatScreen } from '../../../screens/App/BottomTabs/Chat/IndividualChat.screen';

export const ChatStackNavigator = createStackNavigator(
  {
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        header: null // hide navigation bar on this screen only
      }
    },

    IndividualChat: {
      screen: IndividualChatScreen
    }
  },
  defaultStackNavigationOptions
);

ChatStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
