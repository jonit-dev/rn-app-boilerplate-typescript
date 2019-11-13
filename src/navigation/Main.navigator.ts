import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '../constants/UI/Colors.constant';
import { Main } from '../screens/Main';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: Main
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: "white"
    }
  }
);

// tslint:disable-next-line: no-default-export
export default createAppContainer(ProductsNavigator);
