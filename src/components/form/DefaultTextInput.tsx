import React from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  placeholder: string;
}

export const DefaultTextInput = ({
  containerStyle,
  style,
  placeholder
}: IProps) => {
  return (
    <TextInput style={[styles.textInput, style]} placeholder={placeholder} />
  );
};

const styles = StyleSheet.create({
  textInput: {
    minHeight: 55,
    maxHeight: 55,
    borderRadius: 6,
    backgroundColor: colors.white,
    paddingHorizontal: 12
  }
});
