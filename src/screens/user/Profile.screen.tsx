import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { DefaultScreen } from '../../components/navigator/DefaultScreen';
import { colors } from '../../constants/UI/Colors.constant';

export const ProfileScreen = props => {
  return (
    <DefaultScreen
      title="Profile"
      style={styles.container}
      navigation={props.navigation}
    >
      <Text>Profile</Text>
    </DefaultScreen>
  );
};

ProfileScreen.navigationOptions = navData => {
  return {
    drawerIcon: (
      <MaterialIcons color={colors.white} size={24} name="art-track" />
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
