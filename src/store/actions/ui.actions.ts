import { SET_LOADING } from '../reducers/ui.reducer';

export const setLoading = (status: boolean) => dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: {
      status
    }
  });
};
