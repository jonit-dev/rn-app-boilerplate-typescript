import { Alert } from 'react-native';

import { APIHelper } from '../../helpers/APIHelper';
import { RequestTypes } from '../../typescript/Requests.types';
import { POST_DELETE, POST_READ, POST_UPDATE } from '../reducers/post.reducer';
import { toggleModal } from './ui.actions';

export interface IPost {
  title: string;
  text: string;
  imageURIs: string[]; // this will be converted on serverside
  category?: string;
}

export const postCreate = (newPost: IPost) => async dispatch => {
  const bodyFormData = new FormData();

  bodyFormData.append("title", newPost.title);
  bodyFormData.append("text", newPost.text);
  if (newPost.category) {
    bodyFormData.append("category", newPost.category);
  }

  // append our imageURIs

  newPost.imageURIs.forEach(uri => {
    console.log(uri);

    const filename = uri.split("/").pop();
    // Infer the type of the image
    // @ts-ignore
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : `image`;

    bodyFormData.append("images[]", {
      // @ts-ignore
      uri,
      name: uri,
      type
    });
  });

  const response: any = await APIHelper.request(
    RequestTypes.POST,
    "/post",
    bodyFormData,
    true,
    {
      "content-type": "multipart/form-data"
    }
  );

  if (response) {
    if (response.status !== 200) {
      console.log(response.data);
      Alert.alert("Error", response.data.message);
      return;
    } else {
      Alert.alert("Success!", "postCreationSuccess");
    }

    // refresh our posts
    dispatch(postRead());

    dispatch(toggleModal("post"));
  }
};

export const postRead = () => async dispatch => {
  const response: any = await APIHelper.request(
    RequestTypes.GET,
    "/post",
    {},
    true
  );

  if (response) {
    if (response.status !== 200) {
      Alert.alert("Error", response.data.message);
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
      Alert.alert("Error", response.data.message);
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
    Alert.alert("Error", response.data.message);
    return false;
  }

  dispatch({
    type: POST_UPDATE,
    payload: response.data
  });

  return true;
};
