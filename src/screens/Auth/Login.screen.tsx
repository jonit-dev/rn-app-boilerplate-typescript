import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { ShowSnackbar } from '../../components/alert/ShowSnackbar';
import { BlockButton } from '../../components/form/BlockButton';
import { CircleButton } from '../../components/form/CircleButton';
import { Divisor } from '../../components/form/Divisor';
import { Form } from '../../components/form/Form';
import { IconInput, IconPackageTypes } from '../../components/form/IconInput';
import { SMALL } from '../../components/form/SMALL';
import { images } from '../../constants/Images.constant';
import { colors } from '../../constants/UI/Colors.constant';
import { common } from '../../constants/UI/Common.constant';
import { defaultBoldFont, typography } from '../../constants/UI/Typography.constant';
import { TS } from '../../helpers/LanguageHelper';
import { OAuthHelper } from '../../helpers/OAuthHelper';
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

  // OAUTH ========================================

  const facebookLoginClick = async () => {
    const result: any = await OAuthHelper.facebookLogin();

    dispatch(setLoading(true, "facebook"));
    await dispatch(userLogin(result, props.navigation, AuthType.FacebookOAuth));

    dispatch(setLoading(false, "facebook"));
  };

  // GOOGLE OAUTH ========================================

  const googleLoginClick = async () => {
    const result = await OAuthHelper.googleLogin();
    dispatch(setLoading(true, "gmail"));
    await dispatch(userLogin(result, props.navigation, AuthType.GoogleOAuth));
    dispatch(setLoading(false, "gmail"));
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

  const forgotPasswordClick = () => {
    props.navigation.navigate("ForgotPasswordScreen");
  };

  const termsOfUseClick = () => {
    props.navigation.navigate("TermsOfUseScreen");
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
          <Text
            style={[common.link, typography.textBold]}
            onPress={() => registerScreenClick()}
          >
            {TS.string("account", "loginSignupHere")}
          </Text>

          <TouchableOpacity onPress={() => forgotPasswordClick()}>
            <Text style={typography.p}>
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

        <Divisor>Or Sign in with</Divisor>

        <View style={styles.socialAuthRow}>
          <CircleButton
            style={styles.gmailLogin}
            onPress={() => googleLoginClick()}
          >
            <FontAwesome name={"google"} size={24} color={colors.white} />
          </CircleButton>

          <CircleButton
            style={styles.facebookLogin}
            onPress={() => facebookLoginClick()}
          >
            <FontAwesome name={"facebook"} size={24} color={colors.white} />
          </CircleButton>
        </View>

        <TouchableOpacity onPress={() => termsOfUseClick()}>
          <SMALL center={true} textStyle={styles.termsOfUse}>
            By signing in you agree with our{" "}
            <Text style={[typography.small, styles.bold, styles.termsOfUse]}>
              terms of use
            </Text>
          </SMALL>
        </TouchableOpacity>

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

  bold: {
    fontFamily: defaultBoldFont
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

  passwordManagementContainer: {
    marginBottom: 40,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  socialAuthRow: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 200,
    minHeight: 55,
    maxHeight: 55
  },
  gmailLogin: {
    backgroundColor: colors.backgroundGmail
  },
  facebookLogin: {
    backgroundColor: colors.backgroundFacebook
  },

  termsOfUse: {
    color: colors.silver
  }
});
