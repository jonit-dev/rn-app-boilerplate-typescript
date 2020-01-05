import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

interface IProps {
  label: string;
  placeholder: string;
  mainColor: string;
  value: any;
  onChangeText: (text: string) => any;
}

export const ModalInput = (props: IProps) => {
  return (
    <TextInput
      label={props.label}
      placeholder={props.placeholder}
      theme={{
        colors: {
          primary: props.mainColor
        }
      }}
      selectionColor={props.mainColor}
      underlineColor={props.mainColor}
      numberOfLines={1}
      value={props.value}
      onChangeText={props.onChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent"
  }
});
