import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { useDispatch } from 'react-redux';

import { colors } from '../../constants/UI/Colors.constant';
import { typography } from '../../constants/UI/Typography.constant';
import { toggleModal } from '../../store/actions/ui.actions';

interface IProps {
  id: string;
  title: string;
  iconName: string;
  headerBackgroundColor?: string;
  visible: boolean;
  children?: React.ReactNode;
}

export const CustomModal = (props: IProps) => {
  const onSetHeaderColor = () => {
    return {
      backgroundColor: props.headerBackgroundColor
        ? props.headerBackgroundColor
        : colors.primary
    };
  };

  const dispatch = useDispatch();

  return (
    <Modal
      isVisible={props.visible}
      style={styles.modalContainer}
      swipeDirection="left"
      onSwipeComplete={() => dispatch(toggleModal(props.id))}
    >
      <View style={styles.modal}>
        <View style={[styles.modalHeader, onSetHeaderColor()]}>
          <View style={styles.modalHeaderRow}>
            <View style={styles.modalHeaderIconTitle}>
              <Ionicons name={props.iconName} size={30} color={colors.white} />
              <Text style={[typography.textBold, styles.modalHeaderTitle]}>
                {props.title}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                console.log("closing modal");
                dispatch(toggleModal(props.id));
              }}
              style={styles.iconContainer}
            >
              <Ionicons
                name={"md-close"}
                size={28}
                color={colors.white}
                style={styles.iconClose}
              />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.modalBody}>{props.children}</ScrollView>
      </View>
    </Modal>
  );
};

export const MODAL_BORDER_RADIUS = 10;
export const MODAL_PADDING = 18;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: MODAL_BORDER_RADIUS,
    height: 500
  },
  modal: {
    flex: 1,
    justifyContent: "flex-start"
  },
  modalBody: {
    flexGrow: 1,

    padding: MODAL_PADDING
  },

  modalHeader: {
    height: 100,
    borderTopLeftRadius: MODAL_BORDER_RADIUS,
    borderTopRightRadius: MODAL_BORDER_RADIUS,
    backgroundColor: colors.primary,
    paddingHorizontal: MODAL_PADDING,
    justifyContent: "center"
  },
  modalHeaderIconTitle: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  modalHeaderRow: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 35,
    alignItems: "center",
    justifyContent: "space-between"
  },
  modalHeaderTitle: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 14
  },
  iconClose: {
    marginTop: 4
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  }
});
