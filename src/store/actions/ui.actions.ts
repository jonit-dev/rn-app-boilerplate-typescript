import { SET_LOADING, SET_MESSAGE } from '../reducers/ui.reducer';

export const setLoading = (
  status: boolean,
  key: string = "default"
) => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: {
      status,
      key
    }
  });
};

export interface IMessage {
  message: string;
  onDismiss?: () => any;
  onPress?: () => any;
}

export const showMessage = (messageObject: IMessage) => dispatch => {
  dispatch({
    type: SET_MESSAGE,
    payload: messageObject
  });
};
