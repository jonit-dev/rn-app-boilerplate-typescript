import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {}

export const IndividualFeedScreen = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Text>Individual feed screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
