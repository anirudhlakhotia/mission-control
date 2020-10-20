import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { post } from "../api/fetch";
import { setToken, getToken } from "../api/token";
const LoginScreen = ({ navigation }) => {
  const goToDash = async () => {
    var token = await getToken();
    if (token != "undefined") {
      // means that it succeeded
      console.log(token);
      console.log(typeof token);
      navigation.navigate("StudentDash", { data: token });
    }
  };
  const [errorMessage, setErrorMessage] = useState("");
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required("Email Address is Required"),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required("Password is required"),
  });
  return (
    <View style={styles.loginContainer}>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          var params = {
            username: values.email,
            password: values.password,
          };
          var formBody = [];
          for (var property in params) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(encodedKey + "=" + encodedValue);
          }
          formBody = formBody.join("&");
          post("/login", formBody)
            .then(async (res) => {
              console.log(res.data);
              const response = await setToken(res.data.token);
              if (response !== false && res.data.status == 200) {
                goToDash();
                navigation.navigate("AdminDash");
              } else {
                //means it failed
                console.log("ERROR");
              }
              goToDash();
            })
            .catch((res) => {
              if (res && res.error) {
                setErrorMessage(res.error);
              }

              setErrorMessage("Something went wrong.");
            });
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <TextInput
              name="email"
              placeholder="Email Address"
              style={styles.textInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
            <TextInput
              name="password"
              placeholder="Password"
              style={styles.textInput}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <Text>{"\n"}</Text>

            {/* <Button  color="#9370DB" style={{borderRadius:widthPercentageToDP('30%')}}
         onPress={handleSubmit}
         title="LOGIN"
         disabled={!isValid}
       /> */}
            <TouchableOpacity
              onPress={handleSubmit}
              disabled={!isValid}
              style={{
                backgroundColor: "#9370DB",
                height: widthPercentageToDP("10%"),
                width: widthPercentageToDP("70%"),
                borderRadius: widthPercentageToDP("5%"),
                overflow: "hidden",
                // marginBottom:widthPercentageToDP('10%'),
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "sans-serif",
                  marginTop: widthPercentageToDP("2%"),
                }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    width: "90%",
    height: "40%",
    maxHeight: "70%",
    alignSelf: "center",
    backgroundColor: "#f2f2f2",
    padding: widthPercentageToDP("5%"),
    elevation: 10,
    marginTop: widthPercentageToDP("30%"),
    borderRadius: widthPercentageToDP("15%"),
  },
  textInput: {
    paddingLeft: 10,
    height: widthPercentageToDP("10%"),
    width: widthPercentageToDP("70%"),
    alignSelf: "center",
    borderColor: "#4B0082",
    borderRadius: widthPercentageToDP("5%"),
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: widthPercentageToDP("3%"),
    textAlign: "center",
    marginTop: widthPercentageToDP("5%"),
    color: "red",
  },
});
export default LoginScreen;
