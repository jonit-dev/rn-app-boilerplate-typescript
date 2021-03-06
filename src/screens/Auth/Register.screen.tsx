import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { BlockButton } from '../../components/button/BlockButton';
import { Form } from '../../components/form/Form';
import { H2 } from '../../components/form/H2';
import { TS } from '../../helpers/LanguageHelper';
import { setLoading } from '../../store/actions/ui.actions';
import { userRegister } from '../../store/actions/user.actions';

export const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const dispatch = useDispatch();

  const registerButtonClick = async () => {
    await dispatch(setLoading(true, "register"));

    await dispatch(
      userRegister(
        {
          name,
          email,
          password,
          passwordConfirmation
        },
        navigation
      )
    );

    await dispatch(setLoading(false, "register"));
  };

  return (
    <Form style={styles.container}>
      <Logo width={100} height={100} style={styles.logo} />

      <H2 style={styles.h2}>
        {TS.string("account", "registerCreateYourAccount")}
      </H2>

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          label={TS.string("account", "registerInputName")}
          value={name}
          onChangeText={(text: string) => setName(text)}
        />
        <TextInput
          style={styles.input}
          label={TS.string("account", "registerInputEmail")}
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          label={TS.string("account", "registerInputPassword")}
          value={password}
          secureTextEntry={true}
          onChangeText={(text: string) => setPassword(text)}
        />

        <TextInput
          style={styles.input}
          label={TS.string("account", "registerInputPasswordConfirmation")}
          value={passwordConfirmation}
          secureTextEntry={true}
          onChangeText={(text: string) => setPasswordConfirmation(text)}
        />
      </View>

      <BlockButton
        onPress={async () => registerButtonClick()}
        loadingKey={"register"}
      >
        {TS.string("account", "registerButtonText")}
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
