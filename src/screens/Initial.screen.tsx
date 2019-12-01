import { useSelector } from 'react-redux';

export const InitialScreen = props => {
  const token = useSelector<any, any>(state => state.userReducer.token);

  props.navigation.navigate(token ? "App" : "Auth");

  return null;
};
