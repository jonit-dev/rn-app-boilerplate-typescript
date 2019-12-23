import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

import { defaultBoldFont } from '../../constants/UI/Typography.constant';

export const DrawerHeader = props => {
  return (
    <Appbar.Header>
      <Appbar.Action
        color="white"
        icon="menu"
        onPress={() => props.navigation.toggleDrawer()}
      />
      <Appbar.Content
        title={props.title}
        color="white"
        titleStyle={styles.title}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: defaultBoldFont
  }
});
