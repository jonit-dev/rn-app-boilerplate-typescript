import { AdMobInterstitial } from 'expo-ads-admob';

import { appEnv } from '../constants/Env.constant';

export class AdMobHelper {
  public static showAdmobIntersticial = async () => {
    if (!appEnv.admob.enabled) {
      console.log(
        "AdMob is not enabled for this app. If you want to use it, activate it on Env.constant.ts"
      );
      return false;
    }

    // Display an interstitial
    AdMobInterstitial.setAdUnitID(appEnv.admob.adUnitID);
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  };
}
