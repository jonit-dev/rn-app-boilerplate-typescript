import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { CustomModal } from '../../../../../components/modal/CustomModal';
import { ModalInput } from '../../../../../components/modal/ModalInput';
import { colors } from '../../../../../constants/UI/Colors.constant';

export const FeedPostModal = () => {
  const [postTitle, setPostTitle] = useState("");

  const isVisible = useSelector<any, any>(
    state => state.uiReducer.feed.openModals.post
  );

  useEffect(() => {
    console.log(isVisible);
  });

  return (
    <CustomModal
      id={"post"}
      visible={isVisible}
      title="Test modal"
      headerBackgroundColor={colors.accent}
      iconName="ios-information-circle"
    >
      <ModalInput
        label="Title"
        placeholder="Your post title"
        mainColor={colors.accent}
        value={postTitle}
        onChangeText={text => setPostTitle(text)}
      />
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  container: {}
});
