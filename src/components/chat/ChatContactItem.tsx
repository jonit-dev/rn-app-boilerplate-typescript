import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';
import { typography } from '../../constants/UI/Typography.constant';

interface IProps {
  imageSource: any;
  title: string;
  subtitle: string;
  onPress: () => void;
}

export const ChatContactItem = ({
  imageSource,
  title,
  subtitle,
  onPress
}: IProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
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
    </TouchableOpacity>
  );
};

const imageWidthHeight = 50;

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: colors.white,
    padding: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.mediumGray,
    zIndex: 0,
    minHeight: 75,
    width: "100%"
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
