import { Text, View, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import { Button } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Text>User Details CRUD App</Text>
      <Button
        icon="account"
        buttonColor="green"
        textColor="white"
        onPress={() => {
          router.push("/settings");
        }}
      >
        View Details
      </Button>
      <Link href="/test">View Test</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    color: "#fff",
  },
});
