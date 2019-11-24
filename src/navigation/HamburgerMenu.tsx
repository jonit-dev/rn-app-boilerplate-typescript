import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CustomHeaderButton } from '../components/navigator/CustomHeaderButton';

export const HamburgerMenu = props => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="menu"
        iconName="ios-menu"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  );
};
