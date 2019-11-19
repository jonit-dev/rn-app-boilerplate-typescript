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

export const showMessage = (message: IMessage) => dispatch => {
  dispatch({
    type: SET_MESSAGE,
    payload: message
  });
};
