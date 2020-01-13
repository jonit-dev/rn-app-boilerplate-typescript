import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

interface IProps {
  label: string;
  mainColor: string;
  value: any;

  onChangeText: (text: string) => any;
}

export const ModalInput = (props: IProps) => {
  return (
    <TextInput
      label={props.label}
      theme={{
        colors: {
          primary: props.mainColor
        }
      }}
      selectionColor={props.mainColor}
      numberOfLines={1}
      value={props.value}
      onChangeText={props.onChangeText}
      style={[styles.input]}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    marginVertical: 10
  }
});
