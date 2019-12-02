import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { BlockButton } from '../../components/form/BlockButton';
import { DefaultScreen } from '../../components/navigator/DefaultScreen';
import { setLoading } from '../../store/actions/ui.actions';
import { userGetProfileInfo, userLogout } from '../../store/actions/user.actions';

export const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  // On screen focus
  const focusListener = navigation.addListener("didFocus", () => {
    // This is a protected route. User will go back to the login screen if some authentication error occurs
    dispatch(userGetProfileInfo());
  });

  // on "componentWillUnmount" hooks version
  useEffect(() => {
    return () => {
      focusListener.remove();
    };
  }, []);

  return (
    <DefaultScreen
      title="Profile"
      style={styles.container}
      navigation={navigation}
    >
      <Text>Profile (Authentication protected screen!)</Text>
      <BlockButton
        text="Logout"
        onPress={() => {
          dispatch(setLoading(true));

          dispatch(userLogout(navigation));

          dispatch(setLoading(false));
        }}
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
