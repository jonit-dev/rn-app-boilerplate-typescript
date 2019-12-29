import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';
import { defaultBoldFont } from '../../constants/UI/Typography.constant';

interface IProps {
  imageSource?: string;
  imageSize?: number;
  title: string;
  titleColor?: string;
  titleSize?: number;
}

export const AvatarPicture = ({
  imageSource,
  imageSize,
  title,
  titleColor,
  titleSize
}: IProps) => {
  const titleColorStyle = {
    color: titleColor ? titleColor : colors.white,
    fontSize: titleSize ? titleSize : 18
  };

  const imageWidthHeight = imageSize ? imageSize : 30;

  const imageStyle = {
    width: imageWidthHeight,
    height: imageWidthHeight,
    borderRadius: imageWidthHeight / 2
  };

  const noPictureStyle = {
    width: imageWidthHeight,
    height: imageWidthHeight,
    borderRadius: imageWidthHeight / 2,
    backgroundColor: colors.mediumGray
  };

  return (
    <View style={styles.container}>
      <Image
        source={imageSource ? { uri: imageSource } : {}}
        style={imageSource ? imageStyle : noPictureStyle}
      />
      <Text style={[styles.title, titleColorStyle]} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    padding: 8,
    fontFamily: defaultBoldFont
  }
});
