import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { CLEAR_MESSAGE } from '../../store/reducers/ui.reducer';

export const ShowSnackbar = () => {
  const [visible, setVisible] = useState(true);

  const showMessage = useSelector<any, any>(state => state.uiReducer.alert);

  const dispatch = useDispatch();

  const clearMessage = () => {
    dispatch({
      type: CLEAR_MESSAGE
    });

    setVisible(true);
  };

  const executeCallback = () => {
    if (showMessage.onPress !== undefined) {
      showMessage.onPress();
    }

    clearMessage();
  };

  if (showMessage) {
    if (showMessage.message) {
      return (
        <View style={styles.container}>
          <Snackbar
            visible={visible}
            onDismiss={() => clearMessage()}
            action={{
              label: "Ok",
              onPress: () => executeCallback()
            }}
          >
            {showMessage.message}
          </Snackbar>
        </View>
      );
    }
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
