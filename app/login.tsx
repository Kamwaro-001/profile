import LoginPageForm from "@/components/loginPage";
import { selectIsAuthenticated } from "@/store/auth/auth";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
// import { Button, Text } from "react-native-paper";
import { useSelector } from "react-redux";

const LoginScreen: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/");
    }
  }, [isAuthenticated, router]);

  return (
    <View>
      <LoginPageForm />
    </View>
  );
};

export default LoginScreen;
