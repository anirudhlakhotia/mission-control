import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import SwitchSelector from "react-native-switch-selector";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { post } from "../api/fetch";
import CustomInput from "../shared/CustomInput";
import { Formik, Field } from "formik";
import * as yup from "yup";
const SignupForm = ({
  buttonText,
  onSubmit,
  children,
  onAuthentication,
  navigation,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [type, onChangeType] = useState("T");
  const signUpValidationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(/(\w.+\s).+/, "Enter Full Name")
      .required("Full name is required"),
    phoneNumber: yup
      .string()
      .matches(new RegExp("[0-9]{10}"), "Enter a valid phone number")
      .min(8, ({ min }) => `Phone number must be at least ${min} characters`)
      .required("Phone number is required"),
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email is required"),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        "Password must have a special character"
      )
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),
    classAttend: yup
      .string()
      .max(2, ({ max }) => `Class must have ${max} digits `)
      .required("Class is required"),
    section: yup
      .string()
      .matches(/\w*[A-Z]\w*/, "Please enter a capital letter")
      .required("Section is required"),
  });

  // const submit = () => {
  //   onSubmit(email, password)
  //     .then(async (res) => {
  //       await setToken(res.auth_token);
  //       onAuthentication();
  //     })
  //     .catch((res) => {
  //       if (res && res.error) {
  //         setErrorMessage(res.error);
  //       }

  //       setErrorMessage('Something went wrong.');
  //     });
  // };

  const submit = () => {
    if (password == confpassword) {
      console.log("Yes");
      const user = {
        name: name,
        username: email,
        password: password,
        role: type === "S" ? "student" : "teacher",
        classattend: parseInt(Class),
        section: section,
      };
      console.log(user);
      post("/register", user).then(async (res) => {
        console.log(res);
      });
    } else {
      console.log("No");
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        validationSchema={signUpValidationSchema}
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          classAttend: "",
          section: "",
          role: type === "S" ? "student" : "teacher",
        }}
        onSubmit={(values) => {
          values.classAttend = parseInt(values.classAttend);
          values.phoneNumber = parseInt(values.phoneNumber);
          values.role = type === "S" ? "student" : "teacher";
          console.log(values);
        }}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <Field
              component={CustomInput}
              name="name"
              placeholder="Full Name"
            />
            <Field
              component={CustomInput}
              name="email"
              placeholder="Email Address"
              keyboardType="email-address"
              maxLength={80}
            />
            <Field
              component={CustomInput}
              name="phoneNumber"
              placeholder="Phone Number"
              keyboardType="numeric"
              maxLength={10}
            />
            <Field
              component={CustomInput}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Field
              component={CustomInput}
              name="confirmPassword"
              placeholder="Confirm Password"
              secureTextEntry
            />
            <Field
              component={CustomInput}
              name="classAttend"
              placeholder="Class"
              maxLength={2}
              keyboardType="numeric"
            />
            <Field
              component={CustomInput}
              name="section"
              placeholder="Section"
              maxLength={1}
              autoCaptitalize="true"
            />
            <Text>{"\n"}</Text>
            <SwitchSelector
              initial={0}
              onPress={(value) => onChangeType(value)}
              // textColor={colors.purple} //'#7a44cf'
              // selectedColor={colors.white}
              // buttonColor={colors.purple}
              // borderColor={colors.purple}
              style={{ width: widthPercentageToDP("50%") }}
              buttonColor="#4B0082"
              borderColor="#4B0082"
              textColor="	#4B0082"
              options={[
                { label: "Teacher", value: "T" }, //images.feminino = require('./path_to/assets/img/feminino.png')
                { label: "Student", value: "S" }, //images.masculino = require('./path_to/assets/img/masculino.png')
              ]}
            />

            <Text>{"\n"}</Text>
            <View style={styles.container}>
              <TouchableOpacity
                disabled={!isValid}
                onPress={handleSubmit}
                style={{
                  backgroundColor: "#9370DB",
                  height: widthPercentageToDP("10%"),
                  borderRadius: widthPercentageToDP("5%"),
                  width: widthPercentageToDP("90%"),
                  overflow: "hidden",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: widthPercentageToDP("2%"),
                    color: "white",
                    fontFamily: "sans-serif",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>

      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
  },
  input: {
    paddingLeft: 10,
    height: widthPercentageToDP("10%"),
    width: widthPercentageToDP("90%"),
    borderColor: "#4B0082",
    borderRadius: widthPercentageToDP("5%"),
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: "#f6f6f6",
  },
  btn: {
    borderColor: "#9370DB",
  },
});
const SignupScreen = ({ navigation }) => {
  return (
    <SignupForm buttonText="Sign Up">
      <Text
        style={{ color: "blue" }}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Already have an account?
      </Text>
    </SignupForm>
  );
};

export default SignupScreen;
