import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';

import { typography } from '../../constants/UI/Typography.constant';

interface IProps {
  style?: StyleProp<ViewStyle>;
  children?: any;
}

export const H2 = (props: IProps) => {
  return (
    <View>
      <Text style={[props.style, typography.h2]}>{props.children}</Text>
    </View>
  );
};
