import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { DefaultIconButton, IconButtonTypes } from '../../../../../components/button/IconButton';
import { DefaultCamera } from '../../../../../components/camera/DefaultCamera';
import { CustomModal } from '../../../../../components/modal/CustomModal';
import { ModalInput } from '../../../../../components/modal/ModalInput';
import { ModalTextArea } from '../../../../../components/modal/ModalTextArea';
import { colors } from '../../../../../constants/UI/Colors.constant';
import { postCreate } from '../../../../../store/actions/post.action';
import { removeAttachedImage, setLoading } from '../../../../../store/actions/ui.actions';

export const FeedPostModal = () => {
  const modalId = "post"; // this will control the modal functioning and which images should it load (attached pictures)

  // Modal fields ========================================

  const [postTitle, setPostTitle] = useState("");
  const [postTextContent, setPostTextContent] = useState("");

  const [isCameraVisible, setCameraVisible] = useState(false);

  const isVisible = useSelector<any, any>(
    state => state.uiReducer.feed.openModals.post
  );

  const loadedPostImages = useSelector<any, any>(
    state => state.uiReducer.loadedImages[modalId]
  );

  const dispatch = useDispatch();

  const onRemoveAttachedPicture = (imageURI: string) => {
    dispatch(removeAttachedImage(modalId, imageURI));
  };

  const onLoadAttachedPictures = () => {
    if (loadedPostImages) {
      return (
        <View style={styles.attachedImagesContainer}>
          {loadedPostImages.map(imageURI => (
            <View key={imageURI} style={styles.attachedImageWrapper}>
              <Image style={styles.attachedImage} source={{ uri: imageURI }} />
              <TouchableOpacity
                onPress={() => onRemoveAttachedPicture(imageURI)}
                style={styles.iconClose}
              >
                <Ionicons name={"md-close"} size={24} color={colors.white} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      );
    }
  };

  useEffect(() => {
    console.log("camera visible status...");
    console.log(isCameraVisible);
  }, [isCameraVisible]);

  if (isCameraVisible) {
    return (
      <DefaultCamera
        onCloseCamera={async () => {
          setCameraVisible(false);
          await dispatch(setLoading(false, "attachingImage"));
          console.log("camera closed");
        }}
      />
    );
  }

  const onSubmitNewPost = async () => {
    console.log("submiting new post...");

    console.log("converting images...");

    console.log(loadedPostImages);

    let base64Images = [];

    // convert images to base64, if some image is present

    if (loadedPostImages) {
      base64Images = loadedPostImages.map(async imageURI => {
        console.log(`converting ${imageURI}`);

        const base64Image: string = await FileSystem.readAsStringAsync(
          imageURI,
          {
            encoding: FileSystem.EncodingType.Base64
          }
        );

        return "data:image/png;base64," + base64Image;
      });
    }

    // then submit new post

    if (base64Images) {
      console.log(base64Images);
      await dispatch(
        postCreate({
          title: postTitle,
          text: postTextContent,
          base64Images,
          category: "Post"
        })
      );
    }
  };

  return (
    <CustomModal
      id={modalId}
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

      <DefaultIconButton
        mode={IconButtonTypes.outlined}
        iconName="camera"
        color={colors.accent}
        onPress={async () => {
          await dispatch(setLoading(true, "attachingImage"));
          setCameraVisible(true);
        }}
      >
        ATTACH A PICTURE
      </DefaultIconButton>

      {onLoadAttachedPictures()}

      <Button
        mode="contained"
        onPress={() => onSubmitNewPost()}
        color={colors.accent}
        dark={true}
      >
        SUBMIT
      </Button>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  attachedImagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 10
  },
  attachedImage: {
    width: 75,
    height: 75,
    borderRadius: 5
  },
  attachedImageWrapper: {
    position: "relative",
    margin: 10
  },
  iconClose: {
    position: "absolute",
    top: 6,
    right: 8,
    backgroundColor: "transparent"
  }
});
