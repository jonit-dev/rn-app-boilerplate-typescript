import React from 'react';
import { Text, View } from 'react-native';

import { typography } from '../../constants/UI/Typography.constant';

interface IProps {
  style?: any;
  children?: any;
}

export const H2 = (props: IProps) => {
  return (
    <View>
      <Text style={[props.style, typography.h2]}>{props.children}</Text>
    </View>
  );
};
