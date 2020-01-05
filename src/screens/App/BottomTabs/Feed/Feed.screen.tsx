import { useEffect, useState } from 'react';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../../../components/feed/Post';
import { PostActionsButton } from '../../../../components/feed/PostActionsButton';
import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';
import { AdMobHelper } from '../../../../helpers/AdMobHelper';
import { postRead } from '../../../../store/actions/post.action';
import { FeedPostModal } from './modals/FeedPost.modal';

export const PostScreen = props => {
  const { posts } = useSelector<any, any>(state => state.postReducer);
  // const { user } = useSelector<any, any>(state => state.userReducer);

  const [postActionsButtonVisible, setPostActionsButtonVisible] = useState(
    false
  );

  const dispatch = useDispatch();

  // componentDidMount
  useEffect(() => {
    setPostActionsButtonVisible(true);
    const initAdMob = async () => {
      await AdMobHelper.showAdmobIntersticial();
    };
    initAdMob();

    dispatch(postRead()); // read post feed from database
  }, []);

  const onRenderPosts = () => {
    return posts.map(post => {
      return <Post key={post._id} post={post} navigation={props.navigation} />;
    });
  };

  return (
    <DefaultScreen
      title="Feed"
      navigation={props.navigation}
      style={styles.container}
    >
      <NavigationEvents
        onDidFocus={payload => setPostActionsButtonVisible(true)}
        onDidBlur={payload => setPostActionsButtonVisible(false)}
      />

      <ScrollView contentContainerStyle={styles.bodyContainer}>
        {posts && onRenderPosts()}
      </ScrollView>

      <PostActionsButton visible={postActionsButtonVisible} />

      <FeedPostModal />
    </DefaultScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  },
  bodyContainer: {
    flexGrow: 1
  }
});
