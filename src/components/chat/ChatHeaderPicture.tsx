import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';
import { defaultBoldFont } from '../../constants/UI/Typography.constant';

interface IProps {
  imageSource?: string;
  title: string;
}

export const ChatHeaderPicture = ({ imageSource, title }: IProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={imageSource ? { uri: imageSource } : {}}
        style={imageSource ? styles.image : styles.noPicture}
      />
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

const imageWidthHeight = 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  image: {
    width: imageWidthHeight,
    height: imageWidthHeight,
    borderRadius: imageWidthHeight / 2
  },
  noPicture: {
    width: imageWidthHeight,
    height: imageWidthHeight,
    borderRadius: imageWidthHeight / 2,
    backgroundColor: colors.mediumGray
  },
  title: {
    padding: 8,
    fontFamily: defaultBoldFont,
    color: colors.white,
    fontSize: 18
  }
});
