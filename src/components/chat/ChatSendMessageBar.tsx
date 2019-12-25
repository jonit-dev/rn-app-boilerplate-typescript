import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';
import { TS } from '../../helpers/LanguageHelper';
import { CircleButton } from '../form/CircleButton';
import { DefaultTextInput } from '../form/DefaultTextInput';

interface IProps {
  containerStyle?: ViewStyle;
  onChange: (e: any) => void;
  sendColor?: string;
  onSend: () => void;
  value: string;
}

export const ChatSendMessageBar = (props: IProps) => {
  const sendButtonColor = () => {
    return props.sendColor
      ? {
          backgroundColor: props.sendColor
        }
      : {
          backgroundColor: colors.primary
        };
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.chatInputContainer}>
        <DefaultTextInput
          placeholder={TS.string("chat", "chatInputPlaceholder")}
          style={styles.chatInput}
          onChange={props.onChange}
          value={props.value}
        />
      </View>

      <View style={styles.sendButtonContainer}>
        <CircleButton style={sendButtonColor()} onPress={props.onSend}>
          <FontAwesome name={"send"} size={16} color={colors.white} />
        </CircleButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 62,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },

  chatInputContainer: {
    flex: 6
  },
  chatInput: {
    marginHorizontal: 8
  },

  sendButtonContainer: {
    flex: 1,
    marginRight: 8
  }
});
