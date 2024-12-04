/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/levels` | `/(tabs)/levels/` | `/(tabs)/levels/fatiha` | `/(tabs)/levels/fatiha/` | `/(tabs)/levels/fatiha/secondScreen` | `/(tabs)/levels/fatiha/thirdScreen` | `/(tabs)/levels/start` | `/(tabs)/levels/wudu` | `/(tabs)/settings` | `/_sitemap` | `/initialScreen` | `/levels` | `/levels/` | `/levels/fatiha` | `/levels/fatiha/` | `/levels/fatiha/secondScreen` | `/levels/fatiha/thirdScreen` | `/levels/start` | `/levels/wudu` | `/settings`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
