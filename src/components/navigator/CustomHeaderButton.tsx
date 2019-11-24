import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';

export const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={"white"}
    />
  );
};
