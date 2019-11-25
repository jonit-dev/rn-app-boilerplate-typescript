import React from 'react';
import { Appbar } from 'react-native-paper';

export const DrawerHeader = props => {
  return (
    <Appbar.Header>
      <Appbar.Action
        color="white"
        icon="menu"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <Appbar.Content title={props.title} color="white" />
    </Appbar.Header>
  );
};
