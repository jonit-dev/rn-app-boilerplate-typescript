import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  iconName: string;
  color: string;
  onPress: () => any;
  children?: React.ReactNode;
}

export const IconButton = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Button
        icon={props.iconName}
        mode="contained"
        color={colors.accent}
        contentStyle={styles.button}
        dark={true}
        onPress={props.onPress()}
      >
        {props.children}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10
  },
  button: {
    height: 50
  }
});
