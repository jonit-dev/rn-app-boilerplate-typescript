import * as React from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { colors } from '../../constants/UI/Colors.constant';
import { toggleModal } from '../../store/actions/ui.actions';

interface IProps {
  visible: boolean;
}

export const PostActionsButton = (props: IProps) => {
  const [actionMenuOpen, setActionMenuOpen] = useState(false);

  const dispatch = useDispatch();

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
            onPress: () => dispatch(toggleModal("post"))
          }
        ]}
        onStateChange={({ open }) => setActionMenuOpen(!actionMenuOpen)}
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
    paddingBottom: 40
  }
});
