import React, { useState, useEffect } from "react";
import { StyleSheet, TextInput, View, Text, Alert } from "react-native";
import { Button } from "react-native-elements";
import { Formik } from "formik";
import { get, post } from "../../api/fetch";
import * as yup from "yup";

const AssignmentSchema = yup.object({
  correctionLink: yup.string().required().min(5),
  remarks: yup.string().required().min(5),
});

const CreateAssignment = ({ studentID, assignmentID }) => {
  return (
    <View>
      <Formik
        initialValues={{
          correctionLink: "",
          remarks: "",
        }}
        validationSchema={AssignmentSchema}
        onSubmit={async (values) => {
          var params = {
            studentID,
            assignmentID,
            correctionLink: values.correctionLink,
            remarks: values.remarks,
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
              onChangeText={props.handleChange("correctionLink")}
              value={props.values.correctionLink}
              onBlur={props.handleBlur("correctionLink")}
            />

            <Text style={styles.errorText}>
              {props.touched.correctionLink && props.errors.correctionLink}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Assignment Link"
              onChangeText={props.handleChange("remarks")}
              value={props.values.remarks}
              onBlur={props.handleBlur("remarks")}
            />

            <Text style={styles.errorText}>
              {props.touched.remarks && props.errors.remarks}
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
