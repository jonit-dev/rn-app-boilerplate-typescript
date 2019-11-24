import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { BlockButton } from '../components/form/BlockButton';
import { CustomHeaderButton } from '../components/navigator/CustomHeaderButton';
import { persistor } from '../store/persist.store';

export const DashboardScreen = props => {
  return (
    <View style={styles.container}>
      <Text>User dashboard!</Text>
      <BlockButton
        text="Logout"
        onPress={() => {
          persistor.purge();
          props.navigation.navigate("LoginScreen");
        }}
      />
    </View>
  );
};

DashboardScreen.navigationOptions = navData => {
  return {
    headerTitle: "Dashboard",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
