import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import { FeedPost } from '../../../../components/feed/FeedPost';
import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';
import { AdMobHelper } from '../../../../helpers/AdMobHelper';

export const FeedScreen = props => {
  const user = useSelector<any, any>(state => state.userReducer.user);

  useEffect(() => {
    const initAdMob = async () => {
      await AdMobHelper.showAdmobIntersticial();
    };
    initAdMob();
  }, []);

  return (
    <DefaultScreen
      title="Feed"
      navigation={props.navigation}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <FeedPost
          avatarUrl={
            "https://lh3.googleusercontent.com/a-/AAuE7mAzIv_qjLPlkxKMWf7AGtBDUeBEqEhhaq_orgxD=s96-c"
          }
          avatarTitle={"Thea"}
          postDatetime={"13:17"}
          likesNumber={"1"}
          postText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </ScrollView>
    </DefaultScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
