import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export class Main extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>My Main Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
