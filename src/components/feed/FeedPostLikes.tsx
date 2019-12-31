import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { colors } from '../../constants/UI/Colors.constant';
import { feedPostLike } from '../../store/actions/feedpost.action';

interface IProps {
  currentUserId: string;
  likesNumber: string;
  postId: string;
  usersWhoLiked: string[];
}

export const FeedPostLikes = ({
  likesNumber,
  usersWhoLiked,
  postId,
  currentUserId
}: IProps) => {
  const [isLiked, setIsLiked] = useState(usersWhoLiked.includes(currentUserId));

  const dispatch = useDispatch();

  const onLikeClick = async () => {
    const likePost: any = await dispatch(feedPostLike(postId));

    if (likePost) {
      // if we successfully liked our post, then change the icon
      setIsLiked(!isLiked);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => onLikeClick()}>
      <FontAwesome
        size={16}
        name={isLiked ? "heart" : "heart-o"}
        color={colors.accent}
      />
      <Text style={styles.likeText}>{likesNumber} likes</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",

    maxWidth: 100
  },

  likeText: {
    paddingLeft: 8
  }
});
