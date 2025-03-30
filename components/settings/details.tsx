import { getDetails, updateDetails } from "@/store/settings/details";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

const PersonalDetailsForm: React.FC = () => {
  const dispatch = useDispatch();
  // const details = useSelector((state: any) => state.details);
  const details = useSelector(getDetails);
  // const {
  //   firstName = "",
  //   lastName = "",
  //   email = "",
  //   gender = "",
  //   age = "",
  // } = details;
  // const profile = {
  //   firstName: "testin",
  //   lastName: "dfde",
  //   gender: "",
  //   age: "",
  //   email: "",
  // };
  const [formData, setFormData] = useState({
    firstName: details.firstname || "",
    lastName: details.lastname || "",
    email: details.email || "",
    gender: details.gender || "",
    age: details.age || null,
  });
  // const handleInputChange = (field: string, value: string) => {};
  const handleInputChange = (field: string, value: string | number | null) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (data: any) => {
    // update details using dispatch
    dispatch(updateDetails(data));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputGroup}>
        <TextInput
          label="First Name"
          style={styles.input}
          value={formData.firstName}
          onChangeText={(text) => handleInputChange("firstName", text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          label="Enter your last name"
          value={formData.lastName}
          onChangeText={(text) => handleInputChange("lastName", text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          label={"Email"}
          style={styles.input}
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          label="Age"
          value={formData.age !== null ? String(formData.age) : ""}
          keyboardType="numeric"
          maxLength={2}
          onChangeText={(text) => {
            const age = parseInt(text);
            if (!isNaN(age)) {
              handleInputChange("age", age);
            } else {
              handleInputChange("age", null);
            }
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          label="Gender"
          value={formData.gender}
          onChangeText={(text) => handleInputChange("gender", text)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => {
            handleSubmit(formData);
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    flex: 2,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#198754",
    padding: 12,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default PersonalDetailsForm;
