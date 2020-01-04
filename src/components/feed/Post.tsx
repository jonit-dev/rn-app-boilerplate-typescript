import moment from 'moment';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { colors } from '../../constants/UI/Colors.constant';
import { defaultBoldFont, defaultFontSize } from '../../constants/UI/Typography.constant';
import { AvatarPicture } from '../avatar/AvatarPicture';
import { PostLikes } from './PostLikes';
import { PostOptionsDropdown } from './PostOptionsDropdown';

interface IPost {
  _id: string;
  image: string;
  title: string;
  postDatetime: string;
  text: string;
  likes: number;
  ownerId: string;
  usersWhoLiked: string[];
  createdAt: string;
}

interface IProps {
  key?: string;
  post: IPost;
  navigation?: any;
}

export const Post = (props: IProps) => {
  const { user } = useSelector<any, any>(state => state.userReducer);

  const postDatetime = moment(props.post.createdAt).format("ddd, DD MMM YY");

  const {
    _id,
    image: avatarUrl,
    title: avatarTitle,
    text: postText,
    likes: likesNumber,
    ownerId,
    usersWhoLiked
  } = props.post;

  const onPostClick = () => {
    console.log("On post click!");
    props.navigation.navigate("IndividualFeed", {
      avatarUrl,
      avatarTitle,
      postDatetime,
      postText
    });
  };

  return (
    <View style={postStyles.container}>
      <TouchableOpacity onPress={() => onPostClick()}>
        <View style={postStyles.topRow}>
          <AvatarPicture
            imageSource={avatarUrl}
            imageSize={40}
            title={avatarTitle}
            titleColor={colors.dark}
            titleSize={16}
          />

          <View style={[postStyles.datetime]}>
            <Text style={postStyles.dateTimeText}>{postDatetime}</Text>
          </View>
        </View>
        <Card.Cover source={{ uri: avatarUrl }} />
      </TouchableOpacity>

      <View style={postStyles.cardBody}>
        <View style={postStyles.cardRow}>
          <PostLikes
            likesNumber={likesNumber}
            usersWhoLiked={usersWhoLiked}
            postId={_id}
            user={user}
          />

          <PostOptionsDropdown postId={_id} ownerId={ownerId} user={user} />
        </View>
        <View style={postStyles.cardRow}>
          <Text style={postStyles.postText} numberOfLines={2}>
            {postText}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export const postStyles = StyleSheet.create({
  container: {
    width: "100%",
    zIndex: 0
  },
  cardRow: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap"
  },

  topRow: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 8
  },
  datetime: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 110
  },
  dateTimeText: {
    fontSize: defaultFontSize,
    fontFamily: defaultBoldFont,
    color: colors.silver
  },
  cardBody: {
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
    minHeight: "100%",
    padding: 8
  },
  postText: {
    flex: 1,
    color: colors.silver,
    fontSize: defaultFontSize,
    marginTop: 8
  }
});
