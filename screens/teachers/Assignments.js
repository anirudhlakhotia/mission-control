import React, { useState, useEffect } from "react";
import { StyleSheet, View, Modal, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import CreateAssignment from "./CreateAssignment";
import { get } from "../../api/fetch";

const Assignments = ({ navigation }) => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await get("/api/assignments/teacher/getAssignments");
      console.log(res.data.object);
      setAssignments(res.data.object);
    }
    getData();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => setModalOpen(false)}
          />
          <CreateAssignment />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={30}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        keyExtractor={(item) => item._id}
        data={assignments}
        renderItem={({ item }) => (
          <ListItem
            containerStyle={{
              borderRadius: 15,
              marginHorizontal: 15,
              marginVertical: 5,
            }}
            linearGradientProps={{
              colors: ["#2F80ED", "#56CCF2"],
              start: { x: 1, y: 0 },
              end: { x: 0.2, y: 0 },
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={{ color: "white", fontWeight: "bold" }}>
                {item.assignment_data.assignmentName}
              </ListItem.Title>
              <ListItem.Subtitle style={{ color: "white" }}>
                Due Date: {item.assignment_data.dueDate}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron
              color="white"
              size={36}
              onPress={() =>
                navigation.navigate(
                  "AssignmentDetails",
                  item.student_based_data
                )
              }
            />
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalToggle: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 15,
  },
  modalContent: {
    flex: 1,
  },
});

export default Assignments;
