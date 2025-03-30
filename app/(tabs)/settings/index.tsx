import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import PersonalDetailsForm from "@/components/settings/details";
import Profile from "@/components/settings/profile";

export default function Settings() {
  const router = useRouter();
  return <Profile />;
}
