import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { DefaultScreen } from '../../../components/navigator/DefaultScreen';

export const SettingsScreen = props => {
  return (
    <DefaultScreen
      title="Settings"
      style={styles.container}
      navigation={props.navigation}
    >
      <Text>Settings!</Text>
    </DefaultScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
