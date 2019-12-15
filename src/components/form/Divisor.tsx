import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';
import { typography } from '../../constants/UI/Typography.constant';






























interface IProps {
   children?: ReactNode
   style?: ViewStyle
}

export const Divisor = (props: IProps) => {
  return (
    <View style={[styles.container, props.style]}>

      <View style={styles.lineContainer}>
          <View style={styles.line}/>
        </View>
      <Text style={[typography.p, styles.text]}>{props.children}</Text>
      <View style={styles.lineContainer}>
          <View style={styles.line}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     flex: 4,
     flexDirection: 'row',
     flexWrap: 'wrap',

  },
  lineContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  line: {
    flex: 2,
    maxHeight: 1,
    width: '100%',
    backgroundColor: colors.silver
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.silver,
    fontSize: typography.small.fontSize
  }
});
