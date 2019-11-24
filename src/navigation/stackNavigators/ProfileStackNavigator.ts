import { createStackNavigator } from 'react-navigation-stack';

import { defaultStackNavigationOptions } from '../../constants/Navigator.constants';
import { ProfileScreen } from '../../screens/user/Profile.screen';

export const ProfileStackNavigator = createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen
    }
  },
  defaultStackNavigationOptions
);
