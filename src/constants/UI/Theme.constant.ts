import { DefaultTheme } from "react-native-paper";
import Colors from "./Colors.constant";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.accent
  }
};
