import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { LoadingScreen } from '../loading/LoadingScreen';
import { DrawerHeader } from './DrawerHeader';

export const DefaultScreen = props => {
  const isLoading = useSelector<any, any>(state => state.uiReducer.isLoading);

  return !isLoading.status && isLoading.key === "default" ? (
    <LoadingScreen />
  ) : (
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
