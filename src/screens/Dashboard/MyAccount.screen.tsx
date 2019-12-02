import React from 'react';
import { Alert, StyleSheet } from 'react-native';

import { ListItem } from '../../components/list/ListItem';
import { DefaultScreen } from '../../components/navigator/DefaultScreen';
import { colors } from '../../constants/UI/Colors.constant';
import { TS } from '../../helpers/LanguageHelper';
import NavigationHelper from '../../helpers/NavigationHelper';

export const MyAccountScreen = ({ navigation }) => {
  const onDeleteAccount = () => {
    Alert.alert(
      TS.string("global", "genericConfirmationTitle"),
      TS.string("account", "accountDeletionConfirmationText"),
      [
        {
          text: TS.string("global", "genericTextNo"),
          style: "default",
          onPress: () => null
        },
        {
          text: TS.string("account", "accountDeletionConfirmYes"),
          onPress: () => console.log("Delete account pressed"),
          style: "destructive"
        }
      ],
      { cancelable: true }
    );
  };

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
      <ListItem textColor={colors.red} onPress={() => onDeleteAccount()}>
        Delete Account
      </ListItem>
    </DefaultScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0
  }
});
