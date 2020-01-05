import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { IconButton } from '../../../../../components/button/IconButton';
import { CustomModal } from '../../../../../components/modal/CustomModal';
import { ModalInput } from '../../../../../components/modal/ModalInput';
import { ModalTextArea } from '../../../../../components/modal/ModalTextArea';
import { colors } from '../../../../../constants/UI/Colors.constant';

export const FeedPostModal = () => {
  // Modal fields ========================================

  const [postTitle, setPostTitle] = useState("");
  const [postTextContent, setPostTextContent] = useState("");

  const isVisible = useSelector<any, any>(
    state => state.uiReducer.feed.openModals.post
  );

  return (
    <CustomModal
      id={"post"}
      visible={isVisible}
      title="Create a New Post"
      headerBackgroundColor={colors.accent}
      iconName="ios-paper-plane"
    >
      <ModalInput
        label="Title"
        mainColor={colors.accent}
        value={postTitle}
        onChangeText={text => setPostTitle(text)}
      />
      <ModalTextArea
        label="Content"
        mainColor={colors.accent}
        value={postTextContent}
        onChangeText={text => setPostTextContent(text)}
      />
      <IconButton
        iconName="camera"
        color={colors.accent}
        onPress={() => console.log("pressed camera")}
      >
        ATTACH A PICTURE
      </IconButton>
    </CustomModal>
  );
};
