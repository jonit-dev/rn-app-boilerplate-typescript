import React from 'react';
import { ScrollView } from 'react-native';

import { DrawerHeader } from './DrawerHeader';

export const DefaultScreen = props => {
  return (
    <>
      <DrawerHeader title={props.title} navigation={props.navigation} />
      <ScrollView contentContainerStyle={props.style}>
        {props.children}
      </ScrollView>
    </>
  );
};
