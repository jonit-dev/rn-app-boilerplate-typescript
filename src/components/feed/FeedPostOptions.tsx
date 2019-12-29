import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Menu } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {}

export const FeedPostOptions = (props: IProps) => {
  const [visible, setVisible] = useState(false);

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
      <Menu.Item onPress={() => {}} title="Delete" />
      {/* <Divider /> */}
      {/* <Menu.Item onPress={() => {}} title="Item 3" /> */}
    </Menu>
  );
};

const styles = StyleSheet.create({});
