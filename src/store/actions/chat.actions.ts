import { Alert } from 'react-native';

import { APIHelper } from '../../helpers/APIHelper';
import { RequestTypes } from '../../typescript/Requests.types';
import {
  ADD_CONVERSATION,
  ADD_MESSAGE,
  CLEAR_SEARCH_USERS,
  GET_CONVERSATION,
  GET_CONVERSATIONS,
  RESTART_CURRENT_CONVERSATION,
  SEARCH_USERS,
} from '../reducers/chat.reducer';

export interface IMessage {
  id: string;
  name: string;
  message: string;
}

export const searchUsers = (keyword: string) => async dispatch => {
  const response: any = await APIHelper.request(
    RequestTypes.GET,
    `/users/search/${keyword}`,
    {},
    false
  );

  if (response) {
    dispatch({ type: SEARCH_USERS, payload: response.data });
  }
};

export const clearSearchUsers = () => dispatch => {
  dispatch({ type: CLEAR_SEARCH_USERS });
};

export const createConversation = userId => async dispatch => {
  const response: any = await APIHelper.request(
    RequestTypes.POST,
    "/conversations",
    {
      receiverId: userId
    },
    true
  );

  if (response.status !== 200) {
    Alert.alert("Error", response.data.message);
  }

  dispatch({ type: ADD_CONVERSATION, payload: response.data });
};

export const addMessage = (message: IMessage) => async dispatch => {
  dispatch({ type: ADD_MESSAGE, payload: message });
};

export const getConversations = () => async dispatch => {
  const response: any = await APIHelper.request(
    RequestTypes.GET,
    "/conversations",
    {},
    true
  );
  if (response.status === 200) {
    dispatch({ type: GET_CONVERSATIONS, payload: response.data });
  } else {
    Alert.alert("Error", response.data.message);
  }
};

export const getConversation = conversationId => async dispatch => {
  const response: any = await APIHelper.request(
    RequestTypes.GET,
    `/conversations/?id=${conversationId}`,
    {},
    true
  );
  if (response.status === 200) {
    dispatch({ type: GET_CONVERSATION, payload: response.data });
  } else {
    Alert.alert("Error", response.data.message);
  }
};

export const restartChatState = () => async dispatch => {
  dispatch({ type: RESTART_CURRENT_CONVERSATION });
};
