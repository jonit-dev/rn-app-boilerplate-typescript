import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';
import { AdMobHelper } from '../../../../helpers/AdMobHelper';

export const DashboardScreen = props => {
  const user = useSelector<any, any>(state => state.userReducer.user);

  useEffect(() => {
    const initAdMob = async () => {
      await AdMobHelper.showAdmobIntersticial();
    };
    initAdMob();
  }, []);

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
