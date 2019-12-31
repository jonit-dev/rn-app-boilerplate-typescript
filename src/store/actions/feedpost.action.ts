import { Alert } from 'react-native';

import { APIHelper } from '../../helpers/APIHelper';
import { RequestTypes } from '../../typescript/Requests.types';
import { FEEDPOST_READ } from '../reducers/feedpost.reducer';

export const feedPostRead = () => async (dispatch, getState) => {
  const response: any = await APIHelper.request(
    RequestTypes.GET,
    "/feed-post",
    {},
    true
  );

  if (response) {
    if (response.status !== 200) {
      Alert.alert("Error", response.message);
      return;
    }

    dispatch({ type: FEEDPOST_READ, payload: response.data });
  }
};
