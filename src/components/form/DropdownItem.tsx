import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';
import { STRONG } from './STRONG';

interface IProps {
  title: string;
  subtitle: string;
}

export const DropdownItem = ({ title, subtitle }: IProps) => {
  return (
    <View style={styles.dropdownListItem}>
      <STRONG style={styles.dropdownListItemTitle}>{title}: </STRONG>
      <Text style={styles.dropdownListItemSubtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownListItem: {
    flex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: 55,
    width: "100%"
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
