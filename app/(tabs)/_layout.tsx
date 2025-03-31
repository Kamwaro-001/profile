import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/store/auth/auth";
import { useEffect, useState } from "react";

export default function TabLayout() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isMounted, isAuthenticated, router]);
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
