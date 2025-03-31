import { selectIsAuthenticated } from "@/store/auth/auth";
import store from "@/store/store";
import { Stack } from "expo-router";
import { Provider, useSelector } from "react-redux";

function RootNavigator() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <Stack>
      {isAuthenticated ? (
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="login" options={{ headerShown: true }} />
      )}
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
