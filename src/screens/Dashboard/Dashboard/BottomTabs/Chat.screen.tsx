import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import io from 'socket.io-client';

import { ChatContactItem } from '../../../../components/chat/ChatContactItem';
import { Dropdown } from '../../../../components/form/Dropdown';
import { DropdownItem } from '../../../../components/form/DropdownItem';
import { IconInput, IconPackageTypes } from '../../../../components/form/IconInput';
import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';
import { appEnv } from '../../../../constants/Env.constant';
import { images } from '../../../../constants/Images.constant';
import { colors } from '../../../../constants/UI/Colors.constant';

export const ChatScreen = props => {
  const socket = io(appEnv.serverUrl);

  const [searchUsername, setSearchUserName] = useState("");

  return (
    <DefaultScreen
      title="Chat"
      style={styles.container}
      navigation={props.navigation}
    >
      <View style={styles.searchContainer}>
        <IconInput
          iconName={"search"}
          iconSize={24}
          iconColor={colors.dark}
          iconPackage={IconPackageTypes.FontAwesome}
          onChange={text => setSearchUserName(text)}
          placeholder={"Search for a name"}
        />
        <Dropdown>
          <DropdownItem title={"Alice"} subtitle={"K12 Teacher"} />
          <DropdownItem title={"Gerard"} subtitle={"High School Teacher"} />
        </Dropdown>
      </View>

      <ScrollView style={styles.chatContactList}>
        <ChatContactItem
          onPress={() => console.log("enter chatroom")}
          imageSource={images.chat.alice}
          title={"Alice"}
          subtitle={"Hello there!"}
        />

        <ChatContactItem
          onPress={() => console.log("enter chatroom")}
          imageSource={images.chat.gerard}
          title={"Gerard"}
          subtitle={"What's up, bro?"}
        />
        <ChatContactItem
          onPress={() => console.log("enter chatroom")}
          imageSource={images.chat.gerard}
          title={"Gerard"}
          subtitle={"What's up, bro?"}
        />
        <ChatContactItem
          onPress={() => console.log("enter chatroom")}
          imageSource={images.chat.gerard}
          title={"Gerard"}
          subtitle={"What's up, bro?"}
        />
        <ChatContactItem
          onPress={() => console.log("enter chatroom")}
          imageSource={images.chat.gerard}
          title={"Gerard"}
          subtitle={"What's up, bro?"}
        />
        <ChatContactItem
          onPress={() => console.log("enter chatroom")}
          imageSource={images.chat.gerard}
          title={"Gerard"}
          subtitle={"What's up, bro?"}
        />
        <ChatContactItem
          onPress={() => console.log("enter chatroom")}
          imageSource={images.chat.gerard}
          title={"Gerard"}
          subtitle={"What's up, bro?"}
        />
      </ScrollView>
    </DefaultScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: colors.backgroundGray,
    flexWrap: "wrap"
  },
  searchContainer: {
    position: "relative",
    top: 0,
    left: 0,
    flex: 1,

    maxHeight: 60
  },
  chatContactList: {
    flex: 1,
    zIndex: -1
  }
});
