import { createStackNavigator } from 'react-navigation-stack';

import { defaultStackNavigationOptions } from '../../../constants/Navigator.constants';
import { PostScreen } from '../../../screens/App/BottomTabs/Feed/Feed.screen';
import { IndividualPostScreen } from '../../../screens/App/BottomTabs/Feed/IndividualFeed.screen';

export const PostStackNavigator = createStackNavigator(
  {
    Feed: {
      screen: PostScreen,
      navigationOptions: {
        header: null // hide navigation bar on this screen only
      }
    },
    IndividualFeed: {
      screen: IndividualPostScreen
    }
  },
  defaultStackNavigationOptions
);

// Set only root level stack with tab bottom visible
PostStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible
  };
};
