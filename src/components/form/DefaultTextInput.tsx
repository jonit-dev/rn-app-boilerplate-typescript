import React from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  style?: ViewStyle;
  placeholder: string;
  onChange: (e: any) => void;
  value: string;
}

export const DefaultTextInput = ({
  style,
  placeholder,
  onChange,
  value
}: IProps) => {
  return (
    <TextInput
      style={[styles.textInput, style]}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
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
