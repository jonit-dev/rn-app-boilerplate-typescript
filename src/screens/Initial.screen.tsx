import { useDispatch, useSelector } from 'react-redux';

import { userGetProfileInfo } from '../store/actions/user.actions';

export const InitialScreen = props => {
  // Check user token

  const user = useSelector<any, any>(state => state.userReducer.user);
  const userToken = useSelector<any, any>(state => state.userReducer.token);

  if (!userToken || !user) {
    props.navigation.navigate("Auth"); // If user has no token, redirect to login
    return null;
  }

  const dispatch = useDispatch();
  // If user has a token, tries to refresh profile info. If its invalid, it will redirect the user to Auth. If not, he'll be redirected to Auth
  // Check APIHelper line 86 to see how its made.

  dispatch(userGetProfileInfo());

  props.navigation.navigate("App");

  return null;
};
