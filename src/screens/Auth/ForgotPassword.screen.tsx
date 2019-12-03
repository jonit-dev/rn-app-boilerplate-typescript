import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { BlockButton } from '../../components/form/BlockButton';
import { DateInput } from '../../components/form/DateInput';
import { Form } from '../../components/form/Form';
import { H2 } from '../../components/form/H2';
import { TS } from '../../helpers/LanguageHelper';
import { setLoading } from '../../store/actions/ui.actions';

export const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  return (
    <Form style={styles.container}>
      <Logo width={100} height={100} style={styles.logo} />

      <H2 style={styles.h2}>{TS.string("account", "forgotPasswordTitle")}</H2>

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          label={TS.string("account", "emailInput")}
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
      </View>

      <DateInput
        label={TS.string("account", "forgotPasswordBirthdayInput")}
        onChange={date => console.log(date)}
      />

      <BlockButton
        text={TS.string("account", "changePasswordButton")}
        onPress={async () => {
          await dispatch(setLoading(true));

          // dispatch forgot password action

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
