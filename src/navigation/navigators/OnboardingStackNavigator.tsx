import { createStackNavigator } from 'react-navigation-stack';

import { defaultStackNavigationOptions } from '../../constants/Navigator.constants';
import { OnboardingScreen } from '../../screens/Onboarding/Onboarding.screen';

export const OnboardingStackNavigator = createStackNavigator(
  {
    OnboardingScreen: {
      screen: OnboardingScreen,
      navigationOptions: {
        header: null // hide navigation bar on this screen only
      }
    }
  },
  defaultStackNavigationOptions
);
