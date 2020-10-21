import React from "react";
import { StyleSheet, View, Modal, FlatList, Text } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CreateAssignment from "./CreateAssignment";
import { get, post } from "../../api/fetch";

const AssignmentDetails = ({ navigation }) => {
  const studentData = navigation.getParam("submittedStudents");
  console.log(studentData);
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.studentEmail}
        data={studentData}
        renderItem={({ item }) => <Text>{item.studentName}</Text>}
      />
    </View>
  );
};

export default AssignmentDetails;
