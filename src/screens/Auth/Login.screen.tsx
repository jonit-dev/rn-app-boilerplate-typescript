import { FontAwesome } from '@expo/vector-icons';
import { Platform } from '@unimodules/core';
import * as Facebook from 'expo-facebook';
import * as Google from 'expo-google-app-auth';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { ShowSnackbar } from '../../components/alert/ShowSnackbar';
import { BlockButton } from '../../components/form/BlockButton';
import { Form } from '../../components/form/Form';
import { IconInput, IconPackageTypes } from '../../components/form/IconInput';
import { appEnv } from '../../constants/Env.constant';
import { images } from '../../constants/Images.constant';
import { colors } from '../../constants/UI/Colors.constant';
import { common } from '../../constants/UI/Common.constant';
import { typography } from '../../constants/UI/Typography.constant';
import { TS } from '../../helpers/LanguageHelper';
import { setLoading, showMessage } from '../../store/actions/ui.actions';
import { AuthType, userLogin } from '../../store/actions/user.actions';
import { IUser } from '../../typescript/User.types';

export interface IResponseLogin {
  token: string;
  user: IUser;
}

export const LoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // FACEBOOK OAUTH ========================================

  const facebookLogin = async () => {
    console.log("Logging in with facebook");

    try {
      await Facebook.initializeAsync(
        appEnv.oauth.facebook.appId,
        appEnv.oauth.facebook.appName
      );

      const {
        type,
        token,
        expires
      } = await Facebook.logInWithReadPermissionsAsync(
        appEnv.oauth.facebook.appId,
        // @ts-ignore
        {
          permissions: ["public_profile", "email"]
        }
      );

      const accessToken = token;

      console.log({ type, token, expires });

      if (type === "success") {
        dispatch(setLoading(true, "facebook"));
        await dispatch(
          userLogin(
            {
              accessToken
            },
            props.navigation,
            AuthType.FacebookOAuth
          )
        );

        dispatch(setLoading(false, "facebook"));
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  // GOOGLE OAUTH ========================================

  const googleLogin = async () => {
    try {
      const result = await Google.logInAsync({
        clientId: appEnv.oauth.google.androidClientId,
        androidClientId: appEnv.oauth.google.androidClientId,
        iosClientId: appEnv.oauth.google.iosClientId,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        dispatch(setLoading(true, "gmail"));
        await dispatch(
          userLogin(
            {
              idToken: result.idToken,
              appClientId:
                Platform.OS === "android"
                  ? appEnv.oauth.google.androidClientId
                  : appEnv.oauth.google.iosClientId
            },
            props.navigation,
            AuthType.GoogleOAuth
          )
        );

        dispatch(setLoading(false, "gmail"));
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  // check if user is logged in. If so, load navigation stack. If not, load login screen

  const userLoginButtonClick = async () => {
    if (!email) {
      dispatch(
        showMessage({
          message: TS.string("account", "loginNoEmail")
        })
      );
      return false;
    }

    if (!password) {
      dispatch(
        showMessage({
          message: TS.string("account", "loginNoPassword")
        })
      );

      return false;
    }

    if (email && password) {
      dispatch(setLoading(true, "login"));
      await dispatch(
        userLogin(
          {
            email,
            password
          },
          props.navigation
        )
      );

      dispatch(setLoading(false, "login"));
    }
  };

  const registerScreenClick = () => {
    props.navigation.navigate("RegisterScreen");
  };

  const changePasswordClick = () => {
    props.navigation.navigate("ChangePasswordScreen");
  };

  const forgotPasswordClick = () => {
    props.navigation.navigate("ForgotPasswordScreen");
  };

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

        <View style={styles.passwordManagementContainer}>
          <TouchableOpacity onPress={() => changePasswordClick()}>
            <Text style={typography.p}>
              {TS.string("account", "changePasswordLoginText")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => forgotPasswordClick()}>
            <Text style={common.link}>
              {TS.string("account", "forgotPasswordLoginText")}
            </Text>
          </TouchableOpacity>
        </View>

        <BlockButton
          onPress={() => userLoginButtonClick()}
          loadingKey={"login"}
        >
          {TS.string("account", "loginButtonText")}
        </BlockButton>

        <BlockButton
          onPress={() => googleLogin()}
          style={styles.gmailLogin}
          loadingKey={"gmail"}
        >
          <FontAwesome name={"google"} size={24} color={colors.white} />
          {"  "}
          {TS.string("account", "loginWithGmail")}
        </BlockButton>

        <BlockButton
          onPress={() => facebookLogin()}
          style={styles.facebookLogin}
          loadingKey={"facebook"}
        >
          <FontAwesome name={"facebook"} size={24} color={colors.white} />
          {"  "}
          {TS.string("account", "loginWithFacebook")}
        </BlockButton>

        <View style={styles.registerTextContainer}>
          <Text style={typography.text}>
            {TS.string("account", "loginDontHaveAccount")}{" "}
            <Text
              style={[common.link, typography.textBold]}
              onPress={() => registerScreenClick()}
            >
              {TS.string("account", "loginSignupHere")}
            </Text>
          </Text>
        </View>
        <ShowSnackbar />
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
  },
  passwordManagementContainer: {
    marginBottom: 60,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  gmailLogin: {
    marginVertical: 14,
    backgroundColor: colors.backgroundGmail
  },
  facebookLogin: {
    marginVertical: 14,
    backgroundColor: colors.backgroundFacebook
  }
});
