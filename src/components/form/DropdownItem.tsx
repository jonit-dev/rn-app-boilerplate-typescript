import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { colors } from '../../constants/UI/Colors.constant';
import { STRONG } from './STRONG';

interface IProps {
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export const DropdownItem = ({ title, subtitle, onPress }: IProps) => {
  return (
    <TouchableOpacity containerStyle={styles.container} onPress={onPress}>
      <View style={styles.dropdownListItem}>
        <STRONG style={styles.dropdownListItemTitle}>{title}: </STRONG>
        <Text style={styles.dropdownListItemSubtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 55,
    width: "100%",
    maxHeight: 55,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  dropdownListItem: {
    flex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",

    height: "100%"
  },

  dropdownListItemTitle: {
    paddingLeft: 20,
    color: colors.gray
  },
  dropdownListItemSubtitle: {
    paddingLeft: 4,
    color: colors.silver,
    fontSize: 14
  }
});
