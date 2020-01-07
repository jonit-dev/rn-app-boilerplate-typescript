import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Menu } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { colors } from '../../constants/UI/Colors.constant';
import { postDelete } from '../../store/actions/post.action';

interface IProps {
  postId: string;
  ownerId: string;
  user: any;
}

export const PostOptionsDropdown = ({ postId, ownerId, user }: IProps) => {
  const [visible, setVisible] = useState(false);

  const isCurrentUserOwner = user ? user._id === ownerId : false;

  const dispatch = useDispatch();

  // componentWillUnmount
  useEffect(() => {
    // lets cleanup the dropdown and remove it
    return () => {
      onDropdownDismiss();
    };
  }, []);

  const onDropdownDismiss = () => {
    console.log("dropdown dismiss");
    setVisible(false);
  };

  const onPressPostOptions = () => {
    console.log("clicking post options");
    setVisible(!visible);
  };

  const onPressDeletePost = async () => {
    console.log(`deleting post id ${postId}`);
    await dispatch(postDelete(postId));
  };

  return isCurrentUserOwner ? (
    <Menu
      visible={visible}
      onDismiss={() => onDropdownDismiss()}
      anchor={
        <TouchableOpacity onPress={() => onPressPostOptions()}>
          <MaterialCommunityIcons
            size={28}
            name={"dots-horizontal"}
            color={colors.silver}
          />
        </TouchableOpacity>
      }
    >
      {/* <Menu.Item onPress={() => {}} title="Edit" /> */}

      <Menu.Item onPress={() => onPressDeletePost()} title="Delete" />

      {/* <Divider /> */}
      {/* <Menu.Item onPress={() => {}} title="Item 3" /> */}
    </Menu>
  ) : null;
};
