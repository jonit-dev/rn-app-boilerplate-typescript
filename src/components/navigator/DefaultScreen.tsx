import React from 'react';
import { ScrollView, StyleSheet, ViewStyle } from 'react-native';
import { useSelector } from 'react-redux';

import { LoadingScreen } from '../loading/LoadingScreen';
import { DrawerHeader } from './DrawerHeader';

interface IProps {
  title: string;
  navigation: any;
  style: ViewStyle;
  children?: React.ReactNode;
}

export const DefaultScreen = (props: IProps) => {
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
