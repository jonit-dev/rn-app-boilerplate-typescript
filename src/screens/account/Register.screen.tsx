import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Register screen</Text>
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
