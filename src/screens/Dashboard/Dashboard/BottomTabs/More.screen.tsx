import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';

export const MoreScreen = props => {
  return (
    <DefaultScreen
      title="More"
      style={styles.container}
      navigation={props.navigation}
    >
      <Text>More!</Text>
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
