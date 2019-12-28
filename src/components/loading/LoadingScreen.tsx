import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  style?: ViewStyle;
}

export const LoadingScreen = (props: IProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <ActivityIndicator
        size={"large"}
        animating={true}
        color={colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
