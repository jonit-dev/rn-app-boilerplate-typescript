import React from 'react';
import { StyleProp, Text, ViewStyle } from 'react-native';

import { typography } from '../../constants/UI/Typography.constant';

interface IProps {
  style?: StyleProp<ViewStyle>;
  children?: any;
}

export const H1 = (props: IProps) => {
  return (
    <>
      <Text style={[props.style, typography.h1]}>{props.children}</Text>
    </>
  );
};
