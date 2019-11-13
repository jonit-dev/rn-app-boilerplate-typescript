import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface IProps {
  icon: string;
  style: StyleSheet;
}

export class IconInput extends Component<IProps> {
  public onChangeText(text) {
    console.log(text);
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}></View>
        <TextInput
          style={styles.input}
          {...this.props.style}
          onChange={text => this.onChangeText(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 50,
    borderRadius: 6,
    backgroundColor: "rgba(33, 33, 33, 0.8)",
    flex: 1,
    justifyContent: "center",
    flexWrap: "wrap",
    paddingLeft: 20,
    paddingRight: 20
  },
  icon: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "hotpink",
    marginRight: 16
  },
  input: {
    color: "white"
  }
});
