import { Alert } from 'react-native';

import { APIHelper } from '../../helpers/APIHelper';
import { RequestTypes } from '../../typescript/Requests.types';
import { FEEDPOST_READ, FEEDPOST_UPDATE } from '../reducers/feedpost.reducer';

export const feedPostRead = () => async dispatch => {
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

export const feedPostLike = (id: string) => async dispatch => {
  const response: any = await APIHelper.request(
    RequestTypes.POST,
    `/feed-post/like`,
    {
      id
    },
    true
  );

  if (response.status !== 200) {
    Alert.alert("Error", response.message);
    return false;
  }

  dispatch({
    type: FEEDPOST_UPDATE,
    payload: response.data
  });

  return true;
};

// export const feedPostUpdate = () => async (dispatch) => {
//   const response: any = await APIHelper.request(RequestTypes.UPDATE)
// }
