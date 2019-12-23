import { setCustomText } from 'react-native-global-props';

import { colors } from './UI/Colors.constant';
import { defaultFont } from './UI/Typography.constant';

export class GlobalStylesHelper {
  public static init() {
    const customTextProps = {
      style: {
        fontSize: 16,
        color: colors.dark,
        fontFamily: defaultFont
      }
    };
    setCustomText(customTextProps);
  }
}
