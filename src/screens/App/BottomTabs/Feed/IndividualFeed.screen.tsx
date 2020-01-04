import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';

import { AvatarPicture } from '../../../../components/avatar/AvatarPicture';
import { postStyles } from '../../../../components/feed/Post';

export const IndividualPostScreen = ({ navigation }) => {
  const {
    avatarUrl,
    avatarTitle,
    postDatetime,
    postText
  } = navigation.state.params;

  console.log(navigation.state.params);

  return (
    <View style={postStyles.container}>
      <Card.Cover source={{ uri: avatarUrl }} />

      <View style={postStyles.cardBody}>
        <View style={postStyles.cardRow}>
          <Text style={postStyles.dateTimeText}>{postDatetime}</Text>
        </View>
        <View style={postStyles.cardRow}>
          <Text style={postStyles.postText} numberOfLines={2}>
            {postText}
          </Text>
        </View>
      </View>
    </View>
  );
};

IndividualPostScreen.navigationOptions = navData => {
  const { avatarUrl, avatarTitle } = navData.navigation.state.params;

  return {
    headerTitle: <AvatarPicture title={avatarTitle} imageSource={avatarUrl} />,
    tabBarVisible: false
  };
};
