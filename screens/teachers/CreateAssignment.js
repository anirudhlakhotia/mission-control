import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import { get, post } from "../../api/fetch";
import { Calendar } from "react-native-calendars";
import * as yup from "yup";

const AssignmentSchema = yup.object({
  assignmentName: yup.string().required().min(5),
  assignmentLink: yup.string().required().min(5),
});

const CreateAssignment = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  const [date, setDate] = useState("2020-01-01");

  return (
    <View>
      <Formik
        initialValues={{ dueDate: "", assignmentName: "", assignmentLink: "" }}
        validationSchema={AssignmentSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Assignment Name"
              onChangeText={props.handleChange("assignmentName")}
              value={props.values.assignmentName}
              onBlur={props.handleBlur("assignmentName")}
            />

            <Text style={styles.errorText}>
              {props.touched.assignmentName && props.errors.assignmentName}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Assignment Link"
              onChangeText={props.handleChange("assignmentLink")}
              value={props.values.assignmentLink}
              onBlur={props.handleBlur("assignmentLink")}
            />

            <Text style={styles.errorText}>
              {props.touched.assignmentLink && props.errors.assignmentLink}
            </Text>

            <Button
              title="Submit"
              onPress={props.handleSubmit}
              buttonStyle={{ borderRadius: 20, marginHorizontal: 5 }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
});

export default CreateAssignment;
