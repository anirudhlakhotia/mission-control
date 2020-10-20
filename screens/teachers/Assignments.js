import React, { useState } from "react";
import { StyleSheet, View, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CreateAssignment from "./CreateAssignment";

const Assignments = () => {
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
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Assignments;
