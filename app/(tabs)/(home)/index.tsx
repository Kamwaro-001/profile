import { View, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text variant="displaySmall" style={styles.row}>
        Welcome
      </Text>
      <Text variant="bodyLarge" style={styles.row}>
        User Details CRUD App
      </Text>
      <Button
        icon="account"
        buttonColor="#198754"
        textColor="white"
        style={{ borderRadius: 5 }}
        onPress={() => {
          router.push("/settings");
        }}
      >
        View Profile
      </Button>
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
  row: {
    marginBottom: 8,
  },
});
