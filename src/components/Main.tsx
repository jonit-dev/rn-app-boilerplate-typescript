import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  someProp: string;
}

export const Main = (props: IProps) => {
  return (
    <View style={styles.mainContainer}>
      <Text>My Main Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
