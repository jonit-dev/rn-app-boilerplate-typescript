import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { BlockButton } from '../../components/form/BlockButton';
import { Form } from '../../components/form/Form';
import { H2 } from '../../components/form/H2';
import { P } from '../../components/form/P';
import { TS } from '../../helpers/LanguageHelper';
import { UserHelper } from '../../helpers/UserHelper';
import { setLoading } from '../../store/actions/ui.actions';

export const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const onClickForgotPassword = async () => {
    await dispatch(setLoading(true, "forgotPassword"));

    // Forgot password
    await UserHelper.forgotUserPassword({
      email
    });

    await dispatch(setLoading(false, "forgotPassword"));
  };

  return (
    <Form style={styles.container}>
      <Logo width={100} height={100} style={styles.logo} />

      <H2 style={styles.h2}>{TS.string("account", "forgotPasswordTitle")}</H2>

      <P center={true} style={styles.p}>
        {TS.string("account", "forgotPasswordText")}
      </P>

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          label={TS.string("account", "emailInput")}
          value={email}
          onChangeText={(text: string) => setEmail(text)}
        />
      </View>

      <BlockButton
        onPress={() => onClickForgotPassword()}
        loadingKey={"forgotPassword"}
      >
        {TS.string("account", "forgotPasswordButton")}
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
  },
  p: {
    marginVertical: 15
  }
});
