import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { colors } from '../../constants/UI/Colors.constant';

export enum IconButtonTypes {
  text,
  outlined,
  contained
}

interface IProps {
  iconName: string;
  color: string;
  onPress: () => any;
  children?: React.ReactNode;
  mode: IconButtonTypes;
  loadingKey?: string;
}

export const DefaultIconButton = (props: IProps) => {
  const isLoading = useSelector<any, any>(state => state.uiReducer.isLoading);

  return (
    <Button
      loading={props.loadingKey === isLoading.key && isLoading.status === true}
      icon={props.iconName}
      style={styles.container}
      // @ts-ignore
      mode={props.mode}
      color={colors.accent}
      contentStyle={styles.button}
      dark={true}
      onPress={props.onPress}
    >
      {props.children}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.accent,
    marginVertical: 10,
    backgroundColor: "transparent"
  },
  button: {
    height: 50
  }
});
