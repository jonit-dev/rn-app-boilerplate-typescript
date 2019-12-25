import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ChatHeaderPicture } from '../../../../../components/chat/ChatHeaderPicture';
import { ChatMessage, ChatType } from '../../../../../components/chat/ChatMessage';
import { ChatSendMessageBar } from '../../../../../components/chat/ChatSendMessageBar';
import { colors } from '../../../../../constants/UI/Colors.constant';

interface IProps {
  navigation?: any;
}

export const IndividualChatScreen = (props: IProps) => {
  // const { userId, userName } = props.navigation.state.params;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={"height"}
      key={"key"}
      enabled
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.bodyContainer}>
        <ChatMessage type={ChatType.Received} />
        <ChatMessage type={ChatType.Sender} />
      </ScrollView>
      <View style={styles.bottomContainer}>
        <ChatSendMessageBar
          onSend={() => console.log("sending chat message")}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    flexWrap: "wrap",
    backgroundColor: colors.backgroundGray
  },
  bodyContainer: {
    flex: 7,
    width: "100%"
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
    maxHeight: 65,
    justifyContent: "center",
    alignItems: "center"
  }
});

IndividualChatScreen.navigationOptions = navData => {
  const userName = navData.navigation.getParam("userName");

  return {
    headerTitle: <ChatHeaderPicture title={userName} />,
    tabBarVisible: false
  };
};
