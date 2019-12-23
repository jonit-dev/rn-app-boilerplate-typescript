import { APIHelper } from '../../helpers/APIHelper';
import { RequestTypes } from '../../typescript/Requests.types';
import { CLEAR_SEARCH_USERS, SEARCH_USERS } from '../reducers/chat.reducer';

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

export const clearSearchUsers = () => async dispatch => {
  dispatch({ type: CLEAR_SEARCH_USERS });
};
