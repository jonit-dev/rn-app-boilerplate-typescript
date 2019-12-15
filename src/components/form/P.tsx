import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

import { typography } from '../../constants/UI/Typography.constant';

interface IProps {
  center?: boolean;
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle
}

export const P = (props: IProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[typography.p, props.center ? styles.centerText : null]}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12
  },
  centerText: {
    textAlign: "center"
  }
});
