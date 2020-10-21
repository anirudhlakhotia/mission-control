import React, { useState, useEffect } from "react";
import { StyleSheet, View, Modal, FlatList, Text } from "react-native";
import { Card } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import CreateAssignment from "./CreateAssignment";
import { get, post } from "../../api/fetch";

const Assignments = () => {
  const [namesSubmitted, setNamesSubmitted] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [finalArray, setFinalArray] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await get("/api/assignments/teacher/getAssignments");
      console.log(res.data.object);
      setNamesSubmitted(res.data.object.arrys);
      setAssignments(res.data.object.mains);
    }
    getData();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
