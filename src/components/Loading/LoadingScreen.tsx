import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
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
