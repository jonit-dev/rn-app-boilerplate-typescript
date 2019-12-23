import { colors } from './UI/Colors.constant';
import { defaultBoldFont } from './UI/Typography.constant';

export const defaultStackNavigationOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontFamily: defaultBoldFont,
      color: "white"
    }
  }
};
