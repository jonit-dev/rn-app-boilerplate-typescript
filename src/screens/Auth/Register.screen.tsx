import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { BlockButton } from '../../components/form/BlockButton';
import { Form } from '../../components/form/Form';
import { H2 } from '../../components/form/H2';
import { TS } from '../../helpers/LanguageHelper';
import { setLoading } from '../../store/actions/ui.actions';
import { userRegister } from '../../store/actions/user.actions';

export const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const dispatch = useDispatch();

  return (
    <Form style={styles.container}>
      <Logo width={100} height={100} style={styles.logo} />

      <H2 style={styles.h2}>Create your Account</H2>

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          label="Name"
          value={name}
          onChangeText={(text: string) => setName(text)}
        />
        <TextInput
          style={styles.input}
          label="Email"
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
        />

        <TextInput
          style={styles.input}
          label="Password Confirmation"
          value={passwordConfirmation}
          secureTextEntry={true}
          onChangeText={(text: string) => setPasswordConfirmation(text)}
        />
      </View>

      <BlockButton
        text={TS.string("account", "registerButtonText")}
        onPress={async () => {
          await dispatch(setLoading(true));

          await dispatch(
            userRegister({
              name,
              email,
              password,
              passwordConfirmation
            })
          );

          await dispatch(setLoading(false));
        }}
      />
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
