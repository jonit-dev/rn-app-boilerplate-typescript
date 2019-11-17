import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { BlockButton } from '../../components/form/BlockButton';
import { Form } from '../../components/form/Form';
import { IconInput, IconPackageTypes } from '../../components/form/IconInput';
import { images } from '../../constants/Images.constant';
import { colors } from '../../constants/UI/Colors.constant';
import { common } from '../../constants/UI/Common.constant';
import { typography } from '../../constants/UI/Typography.constant';
import { TS } from '../../helpers/LanguageHelper';
import { setLoading } from '../../store/actions/ui.actions';
import { userLogin } from '../../store/actions/user.actions';

export interface IResponseLogin {
  token: string;
  user: IUser;
}

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // check if user is logged in. If so, load navigation stack. If not, load login screen

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.loginBackground}
        style={styles.imageBackground}
      />

      <Form>
        <Logo width={200} height={200} style={styles.logo} />

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

        <View style={styles.registerTextContainer}>
          <Text style={typography.text}>
            Don't have an account? <Text style={common.link}>Signup here</Text>
          </Text>
        </View>
      </Form>
    </View>
  );
};

LoginScreen.navigationOptions = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
  },
  logo: {
    alignSelf: "center"
  },
  registerTextContainer: {
    flexDirection: "row",
    justifyContent: "center",

    marginTop: 22
  }
});
