import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color = "#198754", size }) => (
            <Ionicons name="home" color={"#198754"} size={size} />
          ),
          tabBarLabelStyle: { color: "#198754" },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={"#198754"} size={size} />
          ),
          tabBarLabelStyle: { color: "#198754" },
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
