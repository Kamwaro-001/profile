import { View, Text, StyleSheet } from "react-native";

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Text>TEst page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
