import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import { NavigationEvents } from 'react-navigation';

import { AvatarPicture } from '../../../../components/avatar/AvatarPicture';
import { postStyles } from '../../../../components/feed/Post';
import { appEnv } from '../../../../constants/Env.constant';
import { GAnalyticsHelper } from '../../../../helpers/GAnalyticsHelper';

export const IndividualPostScreen = ({ navigation }) => {
  const { images, postDatetime, postText } = navigation.state.params;

  console.log(navigation.state.params);

  return (
    <View style={postStyles.container}>
      <Card.Cover source={{ uri: `${appEnv.serverUrl}/${images[0]}` }} />

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
      <NavigationEvents
        onDidFocus={async () => GAnalyticsHelper.pageHit("Post_individual")}
      />
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
