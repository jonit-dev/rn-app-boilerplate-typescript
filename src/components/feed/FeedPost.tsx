import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Divider } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';
import { defaultBoldFont, defaultFontSize } from '../../constants/UI/Typography.constant';
import { AvatarPicture } from '../avatar/AvatarPicture';
import { FeedPostLikes } from './FeedPostLikes';
import { FeedPostOptions } from './FeedPostOptions';

interface IProps {
  currentUserId: string;
  id: string; // post id
  avatarUrl: string;
  avatarTitle: string;
  postDatetime: string;
  postText: string;
  likesNumber: string;
  navigation: any;
  usersWhoLiked: string[];
}

export const FeedPost = ({
  currentUserId,
  id,
  avatarUrl,
  avatarTitle,
  postDatetime,
  postText,
  likesNumber,
  usersWhoLiked,
  navigation
}: IProps) => {
  const onFeedPostClick = () => {
    console.log("On feed post click!");
    navigation.navigate("IndividualFeed", {
      id
    });
  };

  console.log(likesNumber);
  console.log(usersWhoLiked);
  console.log(id);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onFeedPostClick()}>
        <View style={styles.topRow}>
          <AvatarPicture
            imageSource={avatarUrl}
            imageSize={40}
            title={avatarTitle}
            titleColor={colors.dark}
            titleSize={16}
          />

          <View style={[styles.datetime]}>
            <Text style={styles.dateTimeText}>{postDatetime}</Text>
          </View>
        </View>
        <Card.Cover source={{ uri: avatarUrl }} />
      </TouchableOpacity>

      <View style={styles.cardBody}>
        <View style={styles.cardRow}>
          <FeedPostLikes
            likesNumber={likesNumber}
            usersWhoLiked={usersWhoLiked}
            postId={id}
            currentUserId={currentUserId}
          />
          <FeedPostOptions />
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.postText} numberOfLines={2}>
            {postText}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 90,
    padding: 8
  },
  postText: {
    flex: 1,
    color: colors.silver,
    fontSize: defaultFontSize,
    marginTop: 8
  }
});
