import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { Post } from '../../../../components/feed/Post';
import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';
import { AdMobHelper } from '../../../../helpers/AdMobHelper';
import { postRead } from '../../../../store/actions/post.action';

export const PostScreen = ({ navigation }, props) => {
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
      return <Post key={post._id} post={post} navigation={navigation} />;
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
