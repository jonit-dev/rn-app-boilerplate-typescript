import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ChatHeaderPicture } from '../../../../../components/chat/ChatHeaderPicture';

interface IProps {
  navigation?: any;
}

export const IndividualChatScreen = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Text>Individual chat screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

IndividualChatScreen.navigationOptions = {
  headerTitle: <ChatHeaderPicture title="Some conversation" />,
  tabBarVisible: false
};
