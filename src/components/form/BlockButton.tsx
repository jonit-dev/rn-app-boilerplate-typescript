import React from 'react';
import { Keyboard, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';

interface IProps {
  text: string;
  onPress: () => void;
}

export const BlockButton = (props: IProps) => {
  const isLoading = useSelector<any, any>(state => state.uiReducer.isLoading);

  return (
    <Button
      contentStyle={styles.container}
      mode={"contained"}
      dark={true}
      loading={isLoading}
      onPress={() => {
        Keyboard.dismiss();
        props.onPress();
      }}
    >
      {props.text}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55
  }
});
