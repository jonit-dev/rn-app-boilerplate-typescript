import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  children: ReactNode;
}

export const Dropdown = (props: IProps) => {
  return <View style={styles.dropdownOptionsContainer}>{props.children}</View>;
};

const styles = StyleSheet.create({
  dropdownOptionsContainer: {
    flex: 1,
    flexWrap: "wrap",
    minHeight: 55,
    position: "absolute",
    top: 60,
    left: 0,
    backgroundColor: "white",
    width: "100%",
    zIndex: 1,
    borderWidth: 0.5,
    borderColor: colors.lightGray,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  }
});
