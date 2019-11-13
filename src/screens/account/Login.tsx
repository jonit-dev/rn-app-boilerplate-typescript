import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { BlockButton } from '../../components/form/BlockButton';
import { IconInput, IconPackageTypes } from '../../components/form/IconInput';
import { images } from '../../constants/Images.constant';
import { colors } from '../../constants/UI/Colors.constant';
import MainNavigator from '../../navigation/Main.navigator';

class Login extends Component {
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
          iconPackage={IconPackageTypes.FontAwesome}
          onChange={text => this.setState({ password: text })}
        />
        <BlockButton
          text={"Login"}
          onPress={() => {
            console.log(this.state);
          }}
        />
      </View>
    );
  }

  public render() {
    return this.isLoggedIn();
  }
}

const mapStateToProps = state => {
  return { someVar: state.reducerVar };
};

// tslint:disable-next-line: no-default-export
export default connect(mapStateToProps, {
  // actions here
})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
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
