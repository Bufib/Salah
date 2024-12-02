/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(levels)` | `/(levels)/fatiha` | `/(levels)/wudu` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/_sitemap` | `/explore` | `/fatiha` | `/initialScreen` | `/wudu`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
