import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';


export const Form = props => {
  return (
    <KeyboardAvoidingView style={styles.form} behavior="padding" enabled>
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
