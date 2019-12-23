import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  navigation?: any;
}

export const IndividualChatScreen = (props: IProps) => {
  return (
    <View>
      <Text>Individual chat screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
