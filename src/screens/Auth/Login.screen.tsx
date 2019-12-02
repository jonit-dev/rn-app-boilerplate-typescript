import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import Logo from '../../assets/images/logo.svg';
import { ShowSnackbar } from '../../components/alert/ShowSnackbar';
import { BlockButton } from '../../components/form/BlockButton';
import { Form } from '../../components/form/Form';
import { IconInput, IconPackageTypes } from '../../components/form/IconInput';
import { images } from '../../constants/Images.constant';
import { colors } from '../../constants/UI/Colors.constant';
import { common } from '../../constants/UI/Common.constant';
import { typography } from '../../constants/UI/Typography.constant';
import { TS } from '../../helpers/LanguageHelper';
import { setLoading, showMessage } from '../../store/actions/ui.actions';
import { userLogin } from '../../store/actions/user.actions';
import { IUser } from '../../typescript/User.types';

export interface IResponseLogin {
  token: string;
  user: IUser;
}

export const LoginScreen = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

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
      dispatch(setLoading(true));
      await dispatch(
        userLogin(
          {
            email,
            password
          },
          props.navigation
        )
      );

      dispatch(setLoading(false));
    }
  };

  const registerScreenClick = () => {
    props.navigation.navigate("RegisterScreen");
  };

  const changePasswordClick = () => {
    props.navigation.navigate("ChangePasswordScreen");
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

          <View>
            <Text style={common.link}>
              {TS.string("account", "forgotPasswordLoginText")}
            </Text>
          </View>
        </View>

        <BlockButton
          text={TS.string("account", "loginButtonText")}
          onPress={() => userLoginButtonClick()}
        />

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
  }
});
