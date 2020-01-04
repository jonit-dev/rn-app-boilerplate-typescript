import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal } from 'react-native-paper';

import { colors } from '../../constants/UI/Colors.constant';

interface IProps {
  visible: boolean;
}

export const PostActionsButton = (props: IProps) => {
  const [actionMenuOpen, setActionMenuOpen] = useState(false);

  return (
    <Portal>
      <FAB.Group
        visible={props.visible}
        open={actionMenuOpen}
        icon={"plus"}
        actions={[
          // { icon: "star", onPress: () => console.log("Pressed add") },
          // {
          //   icon: "star",
          //   label: "Star",
          //   onPress: () => console.log("Pressed star")
          // },
          // {
          //   icon: "email",
          //   label: "Email",
          //   onPress: () => console.log("Pressed email")
          // },
          {
            icon: "camera",
            label: "Add a post",
            onPress: () => console.log("Pressed notifications")
          }
        ]}
        onStateChange={({ open }) => console.log("state changed")}
        onPress={() => setActionMenuOpen(!actionMenuOpen)}
        fabStyle={styles.fabStyle}
        style={styles.fabBackgroundStyle}
        color={colors.white}
      />
    </Portal>
  );
};

const styles = StyleSheet.create({
  fabStyle: {
    backgroundColor: colors.accent
  },
  fabBackgroundStyle: {
    paddingBottom: 35
  }
});
