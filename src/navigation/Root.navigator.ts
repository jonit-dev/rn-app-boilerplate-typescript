import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { InitialScreen } from '../screens/Initial.screen';
import { AuthStackNavigator } from './navigators/AuthNavigator';
import { DashboardDrawerNavigator } from './navigators/drawerNavigator/DashboardDrawerNavigator';

// tslint:disable-next-line: no-default-export
export default createAppContainer(
  createSwitchNavigator({
    Init: {
      screen: InitialScreen
    },
    Auth: AuthStackNavigator,
    App: DashboardDrawerNavigator
  })
);
