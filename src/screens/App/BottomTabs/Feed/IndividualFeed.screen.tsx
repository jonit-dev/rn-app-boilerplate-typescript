import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {}

export const IndividualPostScreen = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Text>Individual post screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
