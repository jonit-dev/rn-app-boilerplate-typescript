import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { ChatHeaderPicture } from '../../../../../components/chat/ChatHeaderPicture';
import { CircleButton } from '../../../../../components/form/CircleButton';
import { DefaultTextInput } from '../../../../../components/form/DefaultTextInput';
import { colors } from '../../../../../constants/UI/Colors.constant';
import { TS } from '../../../../../helpers/LanguageHelper';

interface IProps {
  navigation?: any;
}

export const IndividualChatScreen = (props: IProps) => {
  // const { userId, userName } = props.navigation.state.params;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={"padding"}
      enabled
      keyboardVerticalOffset={75}
    >
      <View style={styles.bodyContainer}>
        <ScrollView>
          <Text>Chat room</Text>
        </ScrollView>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.chatInputContainer}>
          <DefaultTextInput
            placeholder={TS.string("chat", "chatInputPlaceholder")}
          />
        </View>

        <View style={styles.sendButtonContainer}>
          <CircleButton
            style={styles.sendButton}
            onPress={() => console.log("sending message")}
          >
            <FontAwesome name={"send"} size={16} color={colors.white} />
          </CircleButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundGray
  },
  bodyContainer: {
    flex: 1,
    width: "100%"
  },
  bottomContainer: {
    flex: 8,
    maxHeight: 60,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },

  chatInputContainer: {
    flex: 6
  },

  sendButtonContainer: {
    flex: 1
  },
  sendButton: {
    backgroundColor: colors.primary
  }
});

IndividualChatScreen.navigationOptions = navData => {
  const userName = navData.navigation.getParam("userName");

  return {
    headerTitle: <ChatHeaderPicture title={userName} />,
    tabBarVisible: false
  };
};
