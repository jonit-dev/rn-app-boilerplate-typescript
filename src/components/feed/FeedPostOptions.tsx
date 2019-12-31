import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Menu } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  ownerId: string;
  user: any;
}

export const FeedPostOptions = ({ ownerId, user }: IProps) => {
  const [visible, setVisible] = useState(false);

  const isCurrentUserOwner = user._id === ownerId;

  const onDropdownDismiss = () => {
    console.log("dropdown dismiss");
    setVisible(false);
  };

  const onClickFeedPostOptions = () => {
    console.log("clicking post options");
    setVisible(!visible);
  };

  return (
    <Menu
      visible={visible}
      onDismiss={() => onDropdownDismiss()}
      anchor={
        <TouchableOpacity onPress={() => onClickFeedPostOptions()}>
          <MaterialCommunityIcons
            size={28}
            name={"dots-horizontal"}
            color={colors.silver}
          />
        </TouchableOpacity>
      }
    >
      {/* <Menu.Item onPress={() => {}} title="Edit" /> */}
      {isCurrentUserOwner ? (
        <Menu.Item onPress={() => {}} title="Delete" />
      ) : null}
      {/* <Divider /> */}
      {/* <Menu.Item onPress={() => {}} title="Item 3" /> */}
    </Menu>
  );
};
