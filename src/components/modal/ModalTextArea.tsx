import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  label: string;
  mainColor: string;
  value: any;
  onChangeText: (text: string) => any;
}

export const ModalTextArea = (props: IProps) => {
  return (
    <TextInput
      multiline
      mode="outlined"
      label={props.label}
      theme={{
        colors: {
          primary: props.mainColor
        }
      }}
      selectionColor={props.mainColor}
      underlineColor="transparent"
      value={props.value}
      onChangeText={props.onChangeText}
      style={styles.input}
      textAlignVertical={"top"}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
    backgroundColor: colors.white,
    borderColor: "red"
  }
});
