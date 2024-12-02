/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(levels)` | `/(levels)/fatiha` | `/(levels)/start` | `/(levels)/wudu` | `/(tabs)` | `/(tabs)/` | `/(tabs)/settings` | `/_sitemap` | `/fatiha` | `/initialScreen` | `/settings` | `/start` | `/wudu`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
