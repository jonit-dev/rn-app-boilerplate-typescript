import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';
import { defaultFontSize } from '../../constants/UI/Typography.constant';

export enum ChatType {
  Sender = "Sender",
  Received = "Received"
}

interface IProps {
  type: ChatType;
  text: string;
}

export const ChatMessage = (props: IProps) => {
  const alignBubble = () =>
    props.type === ChatType.Sender
      ? styles.senderContainer
      : styles.receiverContainer;

  const usersText = () =>
    props.type === ChatType.Sender ? styles.senderText : styles.receiverText;

  return (
    <View style={styles.container}>
      <View style={[styles.message, alignBubble()]}>
        <Text style={[styles.messageText, usersText()]}>{props.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  receiverContainer: {
    alignSelf: "flex-start"
  },
  senderContainer: {
    alignSelf: "flex-end",
    backgroundColor: colors.primary
  },
  message: {
    backgroundColor: colors.white,
    padding: 8,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.mediumGray,
    maxWidth: "80%"
  },
  messageText: {
    fontSize: defaultFontSize,
    lineHeight: 22
  },
  senderText: {
    color: colors.white
  },
  receiverText: {
    color: colors.gray
  }
});
