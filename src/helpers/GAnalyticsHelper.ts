import { Analytics, PageHit } from 'expo-analytics';

import { appEnv } from '../constants/Env.constant';

export class GAnalyticsHelper {
  public static analytics: Analytics;

  public static init = () => {
    GAnalyticsHelper.analytics = new Analytics(
      appEnv.monitoring.googleAnalytics.UA
    );
  };

  public static pageHit = async (screenName: string) => {
    try {
      await GAnalyticsHelper.analytics.hit(new PageHit(screenName));
      console.log(`GA Tracking => ${screenName}`);
    } catch (error) {
      console.error(error.message);
    }
  };
}
