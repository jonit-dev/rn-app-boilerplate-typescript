import React, { ReactNode } from 'react';
import { Keyboard, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';

interface IProps {
  children?: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
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
      style={props.style}
    >
      {props.children}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55
  }
});
