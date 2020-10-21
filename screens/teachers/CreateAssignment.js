import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Text, Alert } from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import { get, post } from "../../api/fetch";
import { Calendar } from "react-native-calendars";
import * as yup from "yup";

const AssignmentSchema = yup.object({
  assignmentName: yup.string().required().min(5),
  assignmentLink: yup.string().required().min(5),
});

const CreateAssignment = ({ closeModal }) => {
  const [date, setDate] = useState("2020-01-01");

  const changeDate = (dateCal) => {
    setDate(dateCal.timestamp / 1000);
  };

  return (
    <View>
      <Formik
        initialValues={{
          assignmentName: "",
          assignmentLink: "",
        }}
        validationSchema={AssignmentSchema}
        onSubmit={async (values) => {
          closeModal();
          var params = {
            studentID: studentID,
            assignmentID: assignmentID,
            assignmentName: values.assignmentName,
            assignmentLink: values.assignmentLink,
          };
          var formBody = [];
          for (var property in params) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
          }
          formBody = formBody.join("&");
          let res = await post(
            "/api/assignments/teacher/makeAssignment",
            formBody
          );
          console.log(res);
          Alert.alert("Success", "You created the assignment", [
            { text: "Okay" },
          ]);
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

            <Text
              style={{ alignSelf: "center", fontSize: 18, marginBottom: 20 }}
            >
              Select Due Date
            </Text>

            <Calendar minDate={Date()} onDayPress={changeDate} />

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
