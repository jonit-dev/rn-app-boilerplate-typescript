import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  iconName: string;
  iconSize: number;
  iconColor: string;
  iconPackage: IconPackageTypes;
  inputStyle?: StyleSheet;
  isPassword?: boolean;
  onChange: (text: any) => void;
  onBlur?: () => void;
  placeholder?: string;
}

export enum IconPackageTypes {
  FontAwesome,
  Ionicons
}

export const IconInput = (props: IProps) => {
  const {
    iconName,
    iconSize,
    iconColor,
    iconPackage,
    isPassword,
    onChange,
    inputStyle,
    placeholder,
    onBlur
  } = props;

  const renderIcon = () => {
    switch (iconPackage) {
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
  };

  return (
    <View style={styles.container} {...inputStyle}>
      <View style={styles.iconContainer}>{renderIcon()}</View>
      <TextInput
        style={styles.input}
        onChangeText={text => onChange(text)}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        onBlur={onBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
    minHeight: 55,
    maxHeight: 55,
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
    color: colors.dark,

    width: "100%",
    height: "100%"
  }
});
