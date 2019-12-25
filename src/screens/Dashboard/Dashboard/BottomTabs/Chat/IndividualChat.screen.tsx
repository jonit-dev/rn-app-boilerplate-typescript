import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';

import { ChatHeaderPicture } from '../../../../../components/chat/ChatHeaderPicture';
import { ChatMessage, ChatType } from '../../../../../components/chat/ChatMessage';
import { ChatSendMessageBar } from '../../../../../components/chat/ChatSendMessageBar';
import { appEnv } from '../../../../../constants/Env.constant';
import { colors } from '../../../../../constants/UI/Colors.constant';
import { addMessage } from '../../../../../store/actions/chat.actions';

interface IProps {
  navigation?: any;
}

const socket = io(appEnv.serverUrl);

export const IndividualChatScreen = (props: IProps) => {
  const { userId } = props.navigation.state.params;

  const { user } = useSelector<any, any>(state => state.userReducer);
  // const { messages } = useSelector<any, any>(state => state.chatReducer);

  const [chatInputMessage, setChatInputMessage] = useState("");
  const [room, setRoom] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    // when initializing, join the chat room
    const room = user._id + "#" + userId;
    setRoom(room); // we will use it later on socket.emi('message',...)
    console.log(`joining chat room ${room}`);
    socket.emit("join", { room });
  }, []);

  socket.on("clientMessage", ({ id, name, message }) => {
    console.log("received message...");

    dispatch(
      addMessage({
        id,
        name,
        message
      })
    );
  });

  const sendChatMessage = () => {
    console.log("sending a message...");
    console.log(chatInputMessage);

    socket.emit("serverMessage", {
      name: user.name,
      id: user._id,
      message: chatInputMessage,
      room
    });
    setChatInputMessage(""); // refresh message
  };
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
          onChange={e => {
            setChatInputMessage(e.nativeEvent.text);
          }}
          value={chatInputMessage}
          onSend={() => sendChatMessage()}
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
