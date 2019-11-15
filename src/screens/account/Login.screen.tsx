import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import BlockButton from '../../components/form/BlockButton';
import { Form } from '../../components/form/Form';
import { IconInput, IconPackageTypes } from '../../components/form/IconInput';
import { images } from '../../constants/Images.constant';
import { colors } from '../../constants/UI/Colors.constant';
import { TS } from '../../helpers/LanguageHelper';
import MainNavigator from '../../navigation/Main.navigator';
import { setLoading } from '../../store/actions/ui.actions';
import { ICredentials, userLogin } from '../../store/actions/user.actions';

interface IProps {
  setLoading: (status: boolean) => void;
  userLogin: (credentials: ICredentials) => object;
}
interface IState {
  email: string;
  password: string;
}

export interface IResponseLogin {
  token: string;
  user: IUser;
}

class Login extends Component<IProps, IState> {
  public state = {
    email: "",
    password: ""
  };

  public isLoggedIn() {
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
            iconColor={"white"}
            iconPackage={IconPackageTypes.FontAwesome}
            onChange={text => this.setState({ email: text })}
          />
          <IconInput
            iconName={"lock"}
            iconSize={24}
            iconColor={"white"}
            isPassword={true}
            iconPackage={IconPackageTypes.FontAwesome}
            onChange={text => this.setState({ password: text })}
          />
          <BlockButton
            text={TS.string("account", "loginButtonText")}
            onPress={async () => {
              this.props.setLoading(true);
              await this.props.userLogin({
                email: this.state.email,
                password: this.state.password
              });

              this.props.setLoading(false);
            }}
          />
        </Form>
      </View>
    );
  }

  public render() {
    return this.isLoggedIn();
  }
}

const mapStateToProps = state => {
  return { ui: state.uiReducer };
};

// tslint:disable-next-line: no-default-export
export default connect(mapStateToProps, {
  // actions here
  setLoading,
  userLogin
})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
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
