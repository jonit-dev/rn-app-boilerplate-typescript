import { APIHelper } from '../../helpers/APIHelper';
import { RequestTypes } from '../../typescript/Requests.types';
import { ADD_CHAT_TO_LIST, ADD_MESSAGE, CLEAR_SEARCH_USERS, SEARCH_USERS } from '../reducers/chat.reducer';

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

export const addToChatList = chatUser => dispatch => {
  dispatch({ type: ADD_CHAT_TO_LIST, payload: chatUser });
};

export const addMessage = (message: IMessage) => async dispatch => {
  dispatch({ type: ADD_MESSAGE, payload: message });
};
