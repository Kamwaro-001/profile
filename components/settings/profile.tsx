import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { getDetails } from "../../store/settings/details";
import { useRouter } from "expo-router";
import { Button, Divider } from "react-native-paper";

// filepath: /home/job/setup/profile/components/settings/profile.tsx

const Profile: React.FC = () => {
  const details = useSelector(getDetails);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.value}>{details.firstname}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.value}>{details.lastname}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.value}>{details.age}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{details.gender}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{details.email}</Text>
      </View>

      <View style={[styles.row, { borderBottomWidth: 0 }]}>
        <Button
          icon="pen"
          buttonColor="#198754"
          textColor="white"
          style={{ borderRadius: 5, width: "auto", margin: "auto" }}
          onPress={() => router.push("/settings/edit")}
        >
          Edit Profile
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    // everything center aligned
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    // backgroundColor: "#f9f9f9",
  },
  label: {
    fontWeight: "bold",
    width: 100,
    fontSize: 16,
  },
  value: {
    flex: 1,
    fontSize: 16,
  },
});

export default Profile;
