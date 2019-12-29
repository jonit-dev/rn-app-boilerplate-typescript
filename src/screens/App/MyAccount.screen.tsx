import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { ListItem } from '../../components/list/ListItem';
import { DefaultScreen } from '../../components/navigator/DefaultScreen';
import { colors } from '../../constants/UI/Colors.constant';
import { TS } from '../../helpers/LanguageHelper';
import NavigationHelper from '../../helpers/NavigationHelper';
import { setLoading } from '../../store/actions/ui.actions';
import { userLogout } from '../../store/actions/user.actions';

export const MyAccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    Alert.alert(
      TS.string("global", "genericConfirmationTitle"),
      TS.string("account", "accountLogoutConfirmationText"),
      [
        {
          text: TS.string("global", "genericTextNo"),
          style: "default",
          onPress: () => null
        },
        {
          text: TS.string("global", "genericTextYes"),
          onPress: async () => {
            await dispatch(setLoading(true));

            await dispatch(userLogout());

            await dispatch(setLoading(false));
          },
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
        {TS.string("account", "changePasswordLoginText")}
      </ListItem>
      <ListItem textColor={colors.red} onPress={() => onLogoutClick()}>
        {TS.string("account", "logoutButtonText")}
      </ListItem>
    </DefaultScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0
  }
});
