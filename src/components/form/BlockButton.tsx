import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

interface IProps {
  text: string;
  onPress: () => void;
}

export const BlockButton = (props: IProps) => {
  return (
    <Button
      style={styles.button}
      contentStyle={styles.container}
      mode={"contained"}
      dark={true}
      onPress={() => props.onPress()}
    >
      {props.text}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55
  },
  button: {
    width: "100%"
  }
});
