import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import PersonalDetailsForm from "@/components/settings/details";

export default function Settings() {
  const router = useRouter();
  return <PersonalDetailsForm />;
}
