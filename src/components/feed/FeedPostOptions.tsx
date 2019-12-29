import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {}

export const FeedPostOptions = (props: IProps) => {
  const onClickFeedPostOptions = () => {
    console.log("clicking post options");
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onClickFeedPostOptions()}
    >
      <MaterialCommunityIcons
        size={28}
        name={"dots-horizontal"}
        color={colors.silver}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {}
});
