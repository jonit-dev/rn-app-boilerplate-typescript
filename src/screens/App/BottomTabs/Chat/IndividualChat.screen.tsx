import React, { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';

import { AvatarPicture } from '../../../../components/avatar/AvatarPicture';
import { ChatMessage, ChatType } from '../../../../components/chat/ChatMessage';
import { ChatSendMessageBar } from '../../../../components/chat/ChatSendMessageBar';
import { LoadingScreen } from '../../../../components/loading/LoadingScreen';
import { appEnv } from '../../../../constants/Env.constant';
import { colors } from '../../../../constants/UI/Colors.constant';
import { getConversation, restartChatState } from '../../../../store/actions/chat.actions';
import { setLoading } from '../../../../store/actions/ui.actions';

interface IProps {
  navigation?: any;
}

const socket = io(appEnv.serverUrl, {
  autoConnect: false
});

export const IndividualChatScreen = (props: IProps) => {
  const { conversationId } = props.navigation.state.params;
  const { user: ownUser } = useSelector<any, any>(state => state.userReducer);

  const { isLoading } = useSelector<any, any>(state => state.uiReducer);

  const { currentConversation } = useSelector<any, any>(
    state => state.chatReducer
  );
  const [chatInputMessage, setChatInputMessage] = useState("");
  const [room] = useState(conversationId);
  const scrollViewRef = useRef(null);

  const dispatch = useDispatch();

  const refreshConversation = async () => {
    await dispatch(getConversation(conversationId));
  };

  useEffect(() => {
    chatScrollBottom();
  }, [currentConversation]); // when refreshing our currentConversation, scroll to bottom

  useEffect(() => {
    // clear any socket, if somehow its available
    socketIOClear();

    const getConversationInfo = async () => {
      // Get current conversation info
      await dispatch(setLoading(true, "conversationInfo"));
      refreshConversation();
      await dispatch(setLoading(false, "conversationInfo"));
    };
    getConversationInfo();

    // Initialize
    console.log("Initializing socket.io");
    socket.open();

    // Events

    socket.on("clientMessage", async ({ name, senderId, text }) => {
      console.log("received message...");
      console.log(name, senderId, text);

      await dispatch(getConversation(conversationId));
    });

    // when initializing, join the chat room, so we can start exchanging messages
    console.log(`joining chat room - conversation ID: ${room}`);
    socket.emit("join", { room });
  }, []);

  const chatScrollBottom = () => {
    if (!scrollViewRef.current) {
      // this will avoid null errors when messages are loading
      return false;
    }
    // @ts-ignore
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const sendChatMessage = () => {
    if (!chatInputMessage) {
      return;
    }

    console.log("sending a message...");
    console.log(chatInputMessage);

    socket.emit("serverMessage", {
      name: ownUser.name,
      conversationId,
      senderId: ownUser._id,
      text: chatInputMessage,
      room
    });
    setChatInputMessage(""); // refresh message
  };

  const onLoadChatMessages = () => {
    if (isLoading.status && isLoading.key === "conversationInfo") {
      // If we're loading our conversation, show activity indicator
      return <LoadingScreen />;
    } else {
      // else, load our messages
      return (
        <ScrollView style={styles.bodyContainer} ref={scrollViewRef}>
          {renderChatMessages()}
        </ScrollView>
      );
    }
  };

  const renderChatMessages = () => {
    if (!currentConversation) {
      return null;
    }
    if (!currentConversation.messages) {
      return null;
    }
    return currentConversation.messages.map(message => (
      <ChatMessage
        key={message._id}
        type={
          message.senderId === ownUser._id ? ChatType.Sender : ChatType.Received
        }
        text={message.text}
      />
    ));
  };
  const socketIOClear = async () => {
    console.log("Clearing socket.io");
    socket.off("clientMessage");
    socket.close();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={"height"}
      key={"key"}
      enabled
      keyboardVerticalOffset={30}
    >
      <NavigationEvents
        onWillBlur={async event => {
          socketIOClear();
          await dispatch(restartChatState());
        }}
      />
      {onLoadChatMessages()}
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
  },
  loadingContainer: {
    minHeight: "100%"
  }
});

IndividualChatScreen.navigationOptions = navData => {
  const {
    conversationTitle,
    conversationImage
  } = navData.navigation.state.params;

  return {
    headerTitle: (
      <AvatarPicture
        title={conversationTitle}
        imageSource={conversationImage}
      />
    ),
    tabBarVisible: false
  };
};
