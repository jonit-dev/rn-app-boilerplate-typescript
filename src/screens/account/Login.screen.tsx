import React, { Component, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { BlockButton } from '../../components/form/BlockButton';
import { Form } from '../../components/form/Form';
import { IconInput, IconPackageTypes } from '../../components/form/IconInput';
import { images } from '../../constants/Images.constant';
import { colors } from '../../constants/UI/Colors.constant';
import { TS } from '../../helpers/LanguageHelper';
import MainNavigator from '../../navigation/Main.navigator';
import { setLoading } from '../../store/actions/ui.actions';
import { userLogin } from '../../store/actions/user.actions';

export interface IResponseLogin {
  token: string;
  user: IUser;
}

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // check if user is logged in. If so, load navigation stack. If not, load login screen

  const isLoggedIn = false; // TODO: plugin indo redux (check if user is logged in with localstorage)

  return isLoggedIn ? (
    <MainNavigator />
  ) : (
    <View style={styles.container}>
      <ImageBackground
        source={images.loginBackground}
        style={styles.imageBackground}
      />

      <Form>
        <IconInput
          iconName={"envelope-o"}
          iconSize={24}
          iconColor={colors.dark}
          iconPackage={IconPackageTypes.FontAwesome}
          onChange={text => setEmail(text)}
        />
        <IconInput
          iconName={"lock"}
          iconSize={24}
          iconColor={colors.dark}
          isPassword={true}
          iconPackage={IconPackageTypes.FontAwesome}
          onChange={text => setPassword(text)}
        />
        <BlockButton
          text={TS.string("account", "loginButtonText")}
          onPress={async () => {
            dispatch(setLoading(true));
            await dispatch(
              userLogin({
                email,
                password
              })
            );

            dispatch(setLoading(false));
          }}
        />
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.1
  }
});
