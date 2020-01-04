import { Alert } from 'react-native';

import { APIHelper } from '../../helpers/APIHelper';
import { RequestTypes } from '../../typescript/Requests.types';
import { POST_DELETE, POST_READ, POST_UPDATE } from '../reducers/post.reducer';

export const postRead = () => async dispatch => {
  const response: any = await APIHelper.request(
    RequestTypes.GET,
    "/post",
    {},
    true
  );

  if (response) {
    if (response.status !== 200) {
      Alert.alert("Error", response.message);
      return;
    }

    dispatch({ type: POST_READ, payload: response.data });
  }
};

export const postDelete = postId => async dispatch => {
  const response: any = await APIHelper.request(
    RequestTypes.DELETE,
    `/post/${postId}`,
    {},
    true
  );

  console.log(response.data);

  if (response) {
    if (response.status !== 200) {
      Alert.alert("Error", response.message);
      return;
    }

    dispatch({ type: POST_DELETE, payload: postId });
  }
};

export const postLike = (id: string) => async dispatch => {
  const response: any = await APIHelper.request(
    RequestTypes.POST,
    `/post/like`,
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
    type: POST_UPDATE,
    payload: response.data
  });

  return true;
};
