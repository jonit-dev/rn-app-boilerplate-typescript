import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { ProductsOverView } from "../screens/shop/ProductsOverview.screen";
import Colors from "../constants/UI/Colors";

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: {
      screen: ProductsOverView
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary
      },
      headerTintColor: "white"
    }
  }
);

export default createAppContainer(ProductsNavigator);
