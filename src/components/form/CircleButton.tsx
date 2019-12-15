import React, { ReactNode } from 'react';
import { Keyboard, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

interface IProps {
   children?: ReactNode,
   style?: ViewStyle,
   onPress: () => void
}

export const CircleButton = (props: IProps) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]}  onPress={() => {
      Keyboard.dismiss();
      props.onPress();
    }}>

        <View style={styles.buttonContainer}>
        {props.children}
        </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
