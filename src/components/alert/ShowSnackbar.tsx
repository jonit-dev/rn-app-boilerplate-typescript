import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { useSelector } from 'react-redux';

export const ShowSnackbar = () => {
  const [visible, setVisible] = useState(true);

  const showMessage = useSelector<any, any>(state => state.uiReducer.alert);

  console.log(showMessage);

  return showMessage ? (
    <Snackbar
      visible={visible}
      onDismiss={() => setVisible(false)}
      action={{
        label: "Ok",
        onPress: () =>
          !showMessage.onPress() ? setVisible(false) : showMessage.onPress()
      }}
    >
      {showMessage.message}
    </Snackbar>
  ) : null;
};
