import React from 'react';
import { useSelector } from 'react-redux';

import { NavigatorHelper } from '../helpers/NavigatorHelper';

// The goal of this component is to check if the user is already logged in (and send him to the dashboard) and if not, send him to login screen

export const InitialScreen = props => {
  const token = useSelector<any, any>(state => state.userReducer.token);

  let nextRoute = "LoginScreen";

  // TODO: check if token is valid before redirecting to dashboardscreen

  if (token) {
    nextRoute = "DashboardScreen";
  }

  // clear route history and navigate to or login
  NavigatorHelper.resetAndNavigate(props.navigation, nextRoute);

  return null;
};
