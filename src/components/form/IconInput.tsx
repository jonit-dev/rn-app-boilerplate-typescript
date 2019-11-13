import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

interface IProps {
  iconName: string;
  iconSize: number;
  iconColor: string;
  iconPackage: IconPackageTypes;
  inputStyle?: StyleSheet;
}

export enum IconPackageTypes {
  FontAwesome,
  Ionicons
}

export class IconInput extends Component<IProps> {
  public onChangeText(text) {
    console.log(text);
  }

  public renderIcon() {
    const { iconName, iconSize, iconColor } = this.props;

    switch (this.props.iconPackage) {
      case IconPackageTypes.FontAwesome:
        return (
          <FontAwesome
            style={styles.icon}
            size={iconSize}
            name={iconName}
            color={iconColor}
          />
        );
      case IconPackageTypes.Ionicons:
        return (
          <Ionicons
            style={styles.icon}
            size={iconSize}
            name={iconName}
            color={iconColor}
          />
        );
    }
  }

  public render() {
    return (
      <View style={styles.container} {...this.props.inputStyle}>
        <View style={styles.iconContainer}>{this.renderIcon()}</View>
        <TextInput
          style={styles.input}
          onChange={text => this.onChangeText(text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxHeight: 55,
    borderRadius: 6,
    backgroundColor: "rgba(33, 33, 33, 0.8)",
    flex: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    paddingLeft: 20,
    paddingRight: 20,

    flexDirection: "row"
  },
  iconContainer: {
    flex: 1,
    width: 32,
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center"
  },

  icon: {},
  input: {
    flex: 7,
    color: "white",

    width: "100%",
    height: "100%"
  }
});
