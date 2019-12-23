import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ChatContactItem } from '../../../../components/chat/ChatContactItem';
import { Dropdown } from '../../../../components/form/Dropdown';
import { DropdownItem } from '../../../../components/form/DropdownItem';
import { IconInput, IconPackageTypes } from '../../../../components/form/IconInput';
import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';
import { images } from '../../../../constants/Images.constant';
import { colors } from '../../../../constants/UI/Colors.constant';
import { clearSearchUsers, searchUsers } from '../../../../store/actions/chat.actions';

export const ChatScreen = props => {
  // const socket = io(appEnv.serverUrl);

  const [searchUsername, setSearchUserName] = useState("");

  const searchedUsers = useSelector<any, any>(
    state => state.chatReducer.searchedUsers
  );

  const dispatch = useDispatch();

  const chatSearchUsers = async () => {
    if (searchUsername) {
      console.log(`Searching for keyword... ${searchUsername}`);
      await dispatch(searchUsers(searchUsername));
      console.log(searchedUsers);
    }
  };

  const renderUsersDropdown = () => {
    if (!searchedUsers) {
      return null;
    }
    if (searchedUsers.length === 0) {
      return null;
    }

    return (
      <Dropdown>
        {searchedUsers.map(user => {
          return (
            <DropdownItem
              key={user._id}
              title={user.name}
              subtitle={"Something"}
              onPress={() => console.log("adding to state")}
            />
          );
        })}
      </Dropdown>
    );
  };

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
          onChange={text => {
            setSearchUserName(text);

            chatSearchUsers();
          }}
          onBlur={async () => await dispatch(clearSearchUsers())}
          placeholder={"Search for a name"}
        />
        {renderUsersDropdown()}
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
    maxHeight: 60,
    marginBottom: 14
  },
  chatContactList: {
    flex: 1,
    zIndex: -1
  }
});
