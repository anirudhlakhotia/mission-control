import React, { useState } from "react";
import { StyleSheet, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

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
        onSubmit={(values) => {}}
      >
        {(props) => (
          <View>
            <DatePicker
              style={{ width: 200 }}
              date={date}
              mode="date"
              placeholder="submission date"
              minDate={today}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateAssignment;
