import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HamburgerMenu } from '../../navigation/HamburgerMenu';

export const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Text>User profile</Text>
    </View>
  );
};

ProfileScreen.navigationOptions = navData => {
  return {
    headerTitle: "Profile",
    headerLeft: <HamburgerMenu navigation={navData.navigation} />
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {}
});
