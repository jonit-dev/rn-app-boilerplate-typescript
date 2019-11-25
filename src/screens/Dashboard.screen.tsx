import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { DefaultScreen } from '../components/navigator/DefaultScreen';
import { colors } from '../constants/UI/Colors.constant';

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

DashboardScreen.navigationOptions = navData => {
  return {
    drawerIcon: (
      <MaterialIcons color={colors.white} size={24} name="account-circle" />
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
