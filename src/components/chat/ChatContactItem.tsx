import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';
import { typography } from '../../constants/UI/Typography.constant';

interface IProps {
  imageSource: any;
  title: string;
  subtitle: string;
}

export const ChatContactItem = ({ imageSource, title, subtitle }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={typography.textBold} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoContainerTextSubtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

const imageWidthHeight = 50;

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    maxHeight: 75,
    backgroundColor: colors.white,
    padding: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.mediumGray
  },
  image: {
    width: imageWidthHeight,
    height: imageWidthHeight,
    borderRadius: imageWidthHeight / 2
  },
  pictureContainer: {
    flex: 2,

    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  infoContainer: {
    flex: 6,

    height: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  infoRow: {
    width: "100%"
  },
  infoContainerTextSubtitle: {
    color: colors.silver,

    marginTop: 4,
    fontSize: 14
  }
});
