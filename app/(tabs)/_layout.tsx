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
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        // tabBarStyle: {
        //   display: "none",
        // },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Apps",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "apps" : "apps-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "options" : "options-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="si-alay"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="epelita"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="e-riset"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="reviu-cs"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="reviu-satpam"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="e-mediator"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="pentas"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="simaska"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="sipas"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="web_pt"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="web_badilum"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="web_mari"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="esimpatik"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
