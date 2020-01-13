import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

export const Form = props => {
  return (
    <KeyboardAvoidingView
      style={styles.form}
      behavior={"height"}
      key={"form"}
      enabled
      keyboardVerticalOffset={30}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
    flex: 1,
    justifyContent: "center"
  }
});
