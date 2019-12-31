import moment from 'moment';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { FeedPost } from '../../../../components/feed/FeedPost';
import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';
import { AdMobHelper } from '../../../../helpers/AdMobHelper';
import { feedPostRead } from '../../../../store/actions/feedpost.action';

export const FeedScreen = props => {
  // const user = useSelector<any, any>(state => state.userReducer.user);

  const { feedPosts } = useSelector<any, any>(state => state.feedPostReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const initAdMob = async () => {
      await AdMobHelper.showAdmobIntersticial();
    };
    initAdMob();

    dispatch(feedPostRead());
  }, []);

  const onRenderFeedPosts = () => {
    return feedPosts.map(post => {
      const postDatetime = moment(post.createdAt).format("ddd, DD MMM YY");
      return (
        <FeedPost
          key={post._id}
          avatarUrl={post.image}
          avatarTitle={post.title}
          postDatetime={postDatetime}
          likesNumber={post.likes}
          postText={post.text}
        />
      );
    });
  };

  return (
    <DefaultScreen
      title="Feed"
      navigation={props.navigation}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        {feedPosts && onRenderFeedPosts()}
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
