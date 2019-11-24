import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/UI/Colors.constant';
import { HamburgerMenu } from '../navigation/HamburgerMenu';

export const DashboardScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
    </View>
  );
};

DashboardScreen.navigationOptions = navData => {
  return {
    headerLeft: <HamburgerMenu navigation={navData.navigation} />,
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
