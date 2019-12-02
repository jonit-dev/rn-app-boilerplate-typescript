import React from 'react';
import { StyleSheet } from 'react-native';

import { ListItem } from '../../components/list/ListItem';
import { DefaultScreen } from '../../components/navigator/DefaultScreen';
import NavigationHelper from '../../helpers/NavigationHelper';

export const MyAccountScreen = ({ navigation }) => {
  return (
    <DefaultScreen
      title="My Account"
      style={styles.container}
      navigation={navigation}
    >
      <ListItem
        onPress={() => {
          NavigationHelper.navigate("ChangePasswordScreen", null);
        }}
      >
        Change Password
      </ListItem>
    </DefaultScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0
  }
});
