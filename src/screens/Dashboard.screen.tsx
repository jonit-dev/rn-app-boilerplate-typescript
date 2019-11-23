import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const DashboardScreen = props => {
  return (
    <View style={styles.container}>
      <Text>User dashboard!</Text>
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
