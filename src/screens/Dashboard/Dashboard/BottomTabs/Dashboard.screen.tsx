import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';

export const DashboardScreen = props => {
  const user = useSelector<any, any>(state => state.userReducer.user);

  return (
    <DefaultScreen
      title="Dashboard"
      style={styles.container}
      navigation={props.navigation}
    >
      {user && <Text>Dashboard: Welcome {user.name}</Text>}
    </DefaultScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
