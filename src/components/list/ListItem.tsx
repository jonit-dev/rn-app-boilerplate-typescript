import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  children?: any;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  textColor?: string;
  onPress: () => any;
}

export const ListItem = ({
  children,
  iconName = "ios-arrow-forward",
  iconColor = colors.dark,
  iconSize = 20,
  onPress,
  textColor = colors.dark
}: IProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: textColor }]}>{children}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          size={iconSize}
          name={iconName}
          color={iconColor}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: 60,
    maxHeight: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.mediumGray
  },
  iconContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20
  },
  icon: {
    position: "relative",
    top: 0,
    left: 8
  },

  textContainer: {
    flex: 8
  },
  text: {
    paddingLeft: 20
  }
});
