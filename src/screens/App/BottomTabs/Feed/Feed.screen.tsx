import moment from 'moment';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../../../components/feed/Post';
import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';
import { AdMobHelper } from '../../../../helpers/AdMobHelper';
import { postRead } from '../../../../store/actions/post.action';

export const PostScreen = props => {
  const { posts } = useSelector<any, any>(state => state.postReducer);
  // const { user } = useSelector<any, any>(state => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const initAdMob = async () => {
      await AdMobHelper.showAdmobIntersticial();
    };
    initAdMob();

    dispatch(postRead());
  }, []);

  const onRenderPosts = () => {
    return posts.map(post => {
      const postDatetime = moment(post.createdAt).format("ddd, DD MMM YY");
      return (
        <Post
          id={post._id}
          key={post._id}
          avatarUrl={post.image}
          avatarTitle={post.title}
          postDatetime={postDatetime}
          likesNumber={post.likes}
          usersWhoLiked={post.usersWhoLiked}
          postText={post.text}
          ownerId={post.ownerId}
          navigation={props.navigation}
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
        {posts && onRenderPosts()}
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
