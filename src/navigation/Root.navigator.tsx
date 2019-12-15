import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { InitialScreen } from '../screens/Initial.screen';
import { AuthStackNavigator } from './navigators/AuthNavigator';
import { AppDrawerNavigator } from './navigators/drawerNavigator/AppDrawerNavigator';
import { OnboardingStackNavigator } from './navigators/OnboardingStackNavigator';

// tslint:disable-next-line: no-default-export
export default createAppContainer(
  createSwitchNavigator({
    Init: {
      screen: InitialScreen
    },
    Auth: AuthStackNavigator,
    Onboarding: OnboardingStackNavigator,
    App: AppDrawerNavigator
  })
);
