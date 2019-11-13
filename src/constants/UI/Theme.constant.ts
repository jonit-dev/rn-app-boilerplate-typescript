import { DefaultTheme } from 'react-native-paper';

import { colors } from './Colors.constant';


export const theme =  {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.accent
  }
};
