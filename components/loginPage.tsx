import { login } from "@/store/auth/auth";
import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";

const LoginPageForm: React.FC = () => {
  // two fields: email and password
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(login(details));
  };
  const handleChange = (field: string, value: string) => {
    setDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <Text variant="displaySmall" style={{ textAlign: "center" }}>
          Login
        </Text>
        <View style={styles.inputGroup}>
          <TextInput
            label={"Email"}
            value={details.email}
            onChangeText={(text) => handleChange("email", text)}
            mode="outlined"
            dense={false}
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <TextInput
            label={"Password"}
            value={details.password}
            onChangeText={(text) => handleChange("password", text)}
            mode="outlined"
            dense={false}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <Button
          icon="login"
          buttonColor="#198754"
          textColor="white"
          style={{ borderRadius: 5 }}
          onPress={handleSubmit}
        >
          Login
        </Button>
      </View>
    </ScrollView>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    // minHeight: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    // everything center aligned
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    borderRadius: 8,
    minWidth: "50%",
  },
  inputGroup: {
    // flexDirection: "row",
    // alignItems: "center",

    marginBottom: 16,
    width: "80%",
  },
  input: {
    // flex: 2,
    fontSize: 14,
    // height: 30,
    // paddingVertical: 1,
    // padding: 0,
  },
});

export default LoginPageForm;
