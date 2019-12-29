import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  likesNumber: string;
}

export const FeedPostLikes = ({ likesNumber }: IProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const onLikeClick = () => {
    setIsLiked(!isLiked);
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
