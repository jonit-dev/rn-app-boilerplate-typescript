import React from 'react';
import { Text, View } from 'react-native';

import { typography } from '../../constants/UI/Typography.constant';

interface IProps {
  style?: any;
  children?: any;
}

export const H3 = (props: IProps) => {
  return (
    <View>
      <Text style={[props.style, typography.h3]}>{props.children}</Text>
    </View>
  );
};
