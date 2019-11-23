import { NavigationActions, StackActions } from 'react-navigation';


export class NavigatorHelper {
  public static resetAndNavigate(navigation, route: string) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })]
    });
    navigation.dispatch(resetAction);
  }
}
