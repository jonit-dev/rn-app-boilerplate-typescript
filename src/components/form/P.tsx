import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { typography } from '../../constants/UI/Typography.constant';

interface IProps {
  center?: boolean;
  children?: ReactNode;
  styles?: StyleProp<ViewStyle>;
}

export const P = (props: IProps) => {
  return (
    <View style={[styles.container, props.styles]}>
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
