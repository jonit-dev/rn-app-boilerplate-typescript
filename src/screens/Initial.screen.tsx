import { Notifications } from 'expo';
import { useDispatch, useSelector } from 'react-redux';

import { appEnv } from '../constants/Env.constant';
import NavigationHelper from '../helpers/NavigationHelper';
import { userGetProfileInfo } from '../store/actions/user.actions';

export const InitialScreen = props => {
  // Check user token

  const { user, token, onboarding } = useSelector<any, any>(
    state => state.userReducer
  );

  const userToken = token; // just to avoid confusion, lets rename it...

  if (!userToken || !user) {
    props.navigation.navigate("Auth"); // If user has no token, redirect to login
    return null;
  }

  if (!onboarding && appEnv.onboarding.enabled) {
    props.navigation.navigate("Onboarding");
    return null;
  }

  const dispatch = useDispatch();
  // If user has a token, tries to refresh profile info. If its invalid, it will redirect the user to Auth. If not, he'll be redirected to Auth
  // Check APIHelper line 86 to see how its made.

  dispatch(userGetProfileInfo());

  // Check for push notifications!

  Notifications.addListener(notification => {
    const { toScreen, params } = notification.data;

    console.log("Received push data...");
    console.log(toScreen);
    console.log(params);

    NavigationHelper.navigate(toScreen, params);
  });

  props.navigation.navigate("App");

  return null;
};
