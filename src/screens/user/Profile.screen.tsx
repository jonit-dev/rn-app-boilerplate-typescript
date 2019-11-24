import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CustomHeaderButton } from '../../components/navigator/CustomHeaderButton';

export const ProfileScreen = props => {
  return (
    <View style={styles.container}>
      <Text>User profile</Text>
    </View>
  );
};

ProfileScreen.navigationOptions = navData => {
  return {
    headerTitle: "Profile",
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
