import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ChatContactItem } from '../../../../components/chat/ChatContactItem';
import { Dropdown } from '../../../../components/form/Dropdown';
import { DropdownItem } from '../../../../components/form/DropdownItem';
import { IconInput, IconPackageTypes } from '../../../../components/form/IconInput';
import { DefaultScreen } from '../../../../components/navigator/DefaultScreen';
import { colors } from '../../../../constants/UI/Colors.constant';
import { TS } from '../../../../helpers/LanguageHelper';
import { clearSearchUsers, createConversation, getConversations, searchUsers } from '../../../../store/actions/chat.actions';

export const ChatScreen = props => {
  const [searchUsername, setSearchUserName] = useState("");

  const { searchedUsers, conversations } = useSelector<any, any>(
    state => state.chatReducer
  );
  const { user: ownUser } = useSelector<any, any>(state => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // Load user conversations

    const loadUserConversations = async () => {
      await dispatch(getConversations());
    };
    loadUserConversations();
  }, []);

  const chatSearchUsers = async () => {
    if (searchUsername) {
      console.log(`Searching for keyword... ${searchUsername}`);
      await dispatch(searchUsers(searchUsername));
    }
  };

  const renderUsersDropdown = () => {
    // lets remove our own from this dropdown, before rendering

    const filteredUsers = searchedUsers.filter(
      searchedUser => searchedUser._id !== ownUser._id
    );

    if (!filteredUsers) {
      return null;
    }
    if (filteredUsers.length === 0) {
      return null;
    }

    return (
      <Dropdown>
        {filteredUsers.map(dropdownUser => {
          return (
            <DropdownItem
              key={dropdownUser._id}
              title={dropdownUser.name}
              subtitle={dropdownUser.type}
              onPress={async () => {
                console.log("dropdown item clicked");

                const dropdownUserId = dropdownUser._id;

                // if there're not conversations, just create a new one
                await dispatch(
                  createConversation(dropdownUser._id, "Individual")
                ); // TODO: change when introducing group conversation
                await dispatch(clearSearchUsers());
              }}
            />
          );
        })}
      </Dropdown>
    );
  };

  const renderChatContactItems = () => {
    return conversations.map(conversation => (
      <ChatContactItem
        key={conversation._id}
        onPress={() => {
          props.navigation.navigate({
            routeName: "IndividualChat",
            params: {
              conversationTitle: conversation.title,
              conversationId: conversation._id,
              conversationImage: conversation.avatarUrl
            }
          });
        }}
        imageSource={conversation.avatarUrl}
        title={conversation.title}
        subtitle={conversation.subtitle}
      />
    ));
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
          onBlur={() => {
            setTimeout(async () => await dispatch(clearSearchUsers()), 10);
          }}
          placeholder={TS.string("chat", "searchInputPlaceholder")}
        />
        {renderUsersDropdown()}
      </View>

      <ScrollView style={styles.chatContactList}>
        {conversations && renderChatContactItems()}
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
