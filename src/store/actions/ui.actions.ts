import { SET_LOADING, SET_MESSAGE } from '../reducers/ui.reducer';

export const setLoading = (status: boolean) => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: {
      status
    }
  });
};

export interface IMessage {
  message: string;
  onDismiss?: () => any;
  onPress?: () => any;
}

export const showMessage = (messageObject: IMessage) => dispatch => {
  console.log("showing message...");

  dispatch({
    type: SET_MESSAGE,
    payload: messageObject
  });
};
