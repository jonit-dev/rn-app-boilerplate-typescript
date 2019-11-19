import { setCustomText } from 'react-native-global-props';

import { colors } from './UI/Colors.constant';

export class GlobalStylesHelper {
  public static init() {
    const customTextProps = {
      style: {
        fontSize: 16,
        color: colors.dark,
        fontFamily: "robotoRegular"
      }
    };
    setCustomText(customTextProps);
  }
}
