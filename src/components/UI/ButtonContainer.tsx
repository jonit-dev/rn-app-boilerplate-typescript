import React from "react";
import { View, StyleSheet } from "react-native";

const ButtonContainer = props => {
  const { buttonContainer } = styles;

  return <View style={buttonContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%"
  }
});

export { ButtonContainer };
