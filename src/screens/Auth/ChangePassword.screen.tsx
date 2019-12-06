import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { BlockButton } from '../../components/form/BlockButton';
import { Form } from '../../components/form/Form';
import { H2 } from '../../components/form/H2';
import { TS } from '../../helpers/LanguageHelper';
import { UserHelper } from '../../helpers/UserHelper';
import { setLoading } from '../../store/actions/ui.actions';

export const ChangePasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const dispatch = useDispatch();

  const changePasswordClick = async () => {
    await dispatch(setLoading(true));

    await UserHelper.changeUserPassword({
      email,
      currentPassword,
      newPassword,
      repeatNewPassword
    });

    await dispatch(setLoading(false));
  };

  return (
    <Form style={styles.container}>
      <Logo width={100} height={100} style={styles.logo} />

      <H2 style={styles.h2}>{TS.string("account", "changePasswordTitle")}</H2>

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          label={TS.string("account", "emailInput")}
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          label={TS.string("account", "changePasswordCurrentPasswordInput")}
          value={currentPassword}
          onChangeText={(text: string) => setCurrentPassword(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          label={TS.string("account", "changePasswordNewPasswordInput")}
          value={newPassword}
          onChangeText={(text: string) => setNewPassword(text)}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          label={TS.string("account", "changePasswordRepeatNewPasswordInput")}
          value={repeatNewPassword}
          onChangeText={(text: string) => setRepeatNewPassword(text)}
        />
      </View>
      <BlockButton onPress={() => changePasswordClick()}>
        {TS.string("account", "changePasswordButton")}
      </BlockButton>
    </Form>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    backgroundColor: "transparent"
  },
  logo: {
    alignSelf: "center"
  },
  h2: {
    textAlign: "center"
  },
  main: {
    marginTop: 12,
    marginBottom: 40
  }
});
