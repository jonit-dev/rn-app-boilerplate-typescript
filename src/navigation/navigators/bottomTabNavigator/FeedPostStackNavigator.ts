import { createStackNavigator } from 'react-navigation-stack';

import { defaultStackNavigationOptions } from '../../../constants/Navigator.constants';
import { FeedScreen } from '../../../screens/App/BottomTabs/Feed/Feed.screen';
import { IndividualFeedScreen } from '../../../screens/App/BottomTabs/Feed/IndividualFeed.screen';

export const FeedPostStackNavigator = createStackNavigator(
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        header: null // hide navigation bar on this screen only
      }
    },
    IndividualFeed: {
      screen: IndividualFeedScreen
    }
  },
  defaultStackNavigationOptions
);

// Set only root level stack with tab bottom visible
FeedPostStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
