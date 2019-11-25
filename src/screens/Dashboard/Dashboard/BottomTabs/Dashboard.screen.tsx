import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';

export const DashboardScreen = props => {
  return (
    <DefaultScreen
      title="Dashboard"
      style={styles.container}
      navigation={props.navigation}
    >
      <Text>Dashboard!</Text>
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
