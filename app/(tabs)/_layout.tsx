import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint, // Active tab text/icon color
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault, // Inactive tab text/icon color
        headerShown: false, 
        tabBarStyle: {
          backgroundColor:
            colorScheme === "dark"
              ? Colors.universal.tabbarBackgroundDark
              : Colors.universal.tabbarBackgroundLight,
          borderTopColor:
            colorScheme === "dark"
              ? Colors.universal.tabbarBackgroundTopDark
              : Colors.universal.tabbarBackgroundTopLight, // TabBar border
        },
      }}
    >
      <Tabs.Screen
        name="levels"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Einstellungen",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
