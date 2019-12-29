import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';
import { defaultBoldFont } from '../../constants/UI/Typography.constant';
import { AvatarPicture } from '../avatar/AvatarPicture';
import { PostLikes } from './PostLikes';

interface IProps {
  avatarUrl: string;
  avatarTitle: string;
  postDatetime: string;
  likesNumber: string;
}

export const FeedPost = ({
  avatarUrl,
  avatarTitle,
  postDatetime,
  likesNumber
}: IProps) => {
  return (
    <Card style={styles.container}>
      <View style={styles.topRow}>
        <AvatarPicture
          imageSource={avatarUrl}
          imageSize={40}
          title={avatarTitle}
          titleColor={colors.dark}
          titleSize={16}
        />

        <View style={styles.datetime}>
          <Text style={styles.dateTimeText}>{postDatetime}</Text>
        </View>
      </View>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />

      <View style={styles.cardBody}>
        <View style={styles.likeContainer}>
          <PostLikes likesNumber={likesNumber} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderWidth: 1,
    borderColor: "hotpink"
  },
  likeContainer: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue"
  },
  topRow: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 3,
    borderColor: "blue"
  },
  datetime: {
    borderWidth: 1,
    borderColor: "hotpink",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 50
  },
  dateTimeText: {
    fontSize: 14,
    fontFamily: defaultBoldFont,
    color: colors.silver
  },
  cardBody: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "yellow",
    width: "100%",
    height: 90
  }
});
