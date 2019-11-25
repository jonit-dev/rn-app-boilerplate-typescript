import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { BlockButton } from '../../components/form/BlockButton';
import { DefaultScreen } from '../../components/navigator/DefaultScreen';
import { userLogout } from '../../store/actions/user.actions';

export const ProfileScreen = props => {
  const dispatch = useDispatch();

  return (
    <DefaultScreen
      title="Profile"
      style={styles.container}
      navigation={props.navigation}
    >
      <Text>Profile</Text>
      <BlockButton
        text="Logout"
        onPress={() => dispatch(userLogout(props.navigation))}
      />
    </DefaultScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
