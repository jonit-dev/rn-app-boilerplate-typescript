import { NavigationActions } from 'react-navigation';

let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

const getCurrentRoute = async () => {
  // this function returns an object with your route params, routeName and key

  let route = await _navigator.state.nav;
  while (route.routes) {
    route = route.routes[route.index];
  }
  return route;
};

// add other navigation functions that you need and export them

// tslint:disable-next-line: no-default-export
export default {
  navigate,
  setTopLevelNavigator,
  getCurrentRoute
};
