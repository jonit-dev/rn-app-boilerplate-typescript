import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerItems } from 'react-navigation-drawer';

import Logo from '../../assets/images/logo.svg';
import { colors } from '../../constants/UI/Colors.constant';

export const CustomDrawerContentComponent = props => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Logo width={150} height={150} style={styles.logo} />
        </View>
        <View style={styles.body}>
          <DrawerItems {...props} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    padding: 12
  },
  body: {},
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  logo: {
    alignSelf: "center"
  }
});
