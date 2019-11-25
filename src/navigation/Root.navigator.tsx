import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { InitialScreen } from '../screens/Initial.screen';
import { AuthStackNavigator } from './navigators/AuthNavigator';
import { AppDrawerNavigator } from './navigators/drawerNavigator/AppDrawerNavigator';

// tslint:disable-next-line: no-default-export
export default createAppContainer(
  createSwitchNavigator({
    Init: {
      screen: InitialScreen
    },
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
  })
);
