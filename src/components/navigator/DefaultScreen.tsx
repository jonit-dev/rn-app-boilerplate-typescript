import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { DrawerHeader } from './DrawerHeader';

export const DefaultScreen = props => {
  return (
    <>
      <DrawerHeader title={props.title} navigation={props.navigation} />
      <ScrollView contentContainerStyle={[styles.container, props.style]}>
        {props.children}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});
