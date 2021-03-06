import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { colors } from '../../constants/UI/Colors.constant';
import { postLike } from '../../store/actions/post.action';

interface IProps {
  likesNumber: number;
  postId: string;
  usersWhoLiked: string[];
  user: any;
}

export const PostLikes = ({
  likesNumber,
  usersWhoLiked,
  postId,
  user
}: IProps) => {
  const [isLiked, setIsLiked] = useState(
    user ? usersWhoLiked.includes(user._id) : false
  );

  const dispatch = useDispatch();

  const onLikeClick = async () => {
    const likePost: any = await dispatch(postLike(postId));

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
