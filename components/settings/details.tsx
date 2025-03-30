import {
  getDetails,
  updateDetails,
  clearDetails,
} from "@/store/settings/details";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput, Button, Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

const PersonalDetailsForm: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

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
        {/* <Text>test</Text> */}
        <TextInput
          label="First Name"
          style={styles.input}
          value={formData.firstName}
          dense={true}
          mode="outlined"
          onChangeText={(text) => handleInputChange("firstName", text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          label="Enter your last name"
          value={formData.lastName}
          dense={true}
          mode="outlined"
          onChangeText={(text) => handleInputChange("lastName", text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          label={"Email"}
          style={styles.input}
          keyboardType="email-address"
          value={formData.email}
          dense={true}
          mode="outlined"
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
          dense={true}
          mode="outlined"
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
          dense={true}
          mode="outlined"
          onChangeText={(text) => handleInputChange("gender", text)}
        />
      </View>
      {/* <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => {
            handleSubmit(formData);
          }}
        >
          Save
        </Text>
      </TouchableOpacity> */}
      <View style={{ alignItems: "center" }}>
        <Button
          icon="content-save"
          buttonColor="#198754"
          textColor="white"
          style={styles.button}
          onPress={() => {
            handleSubmit(formData);
            onToggleSnackBar();
          }}
        >
          Save
        </Button>
      </View>

      <View style={styles.snackbar}>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          duration={3000}
          action={{
            label: "Undo",
            onPress: () => {
              // call the clearDetails from redux
              dispatch(clearDetails());
            },
          }}
        >
          Changes Saved!
        </Snackbar>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    // minimum height 100 vh
    minHeight: "100%",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 2,
    fontSize: 14,
    // height: 30,
    // paddingVertical: 1,
    // padding: 0,
  },
  button: {
    backgroundColor: "#198754",
    // padding: 12,
    borderRadius: 4,
    // alignItems: "center",
    marginTop: 16,
    width: "auto",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  snackbar: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default PersonalDetailsForm;
