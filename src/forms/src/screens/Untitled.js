import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/image_cxq0..png")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Icon name="keyboard-backspace" style={styles.icon}></Icon>
        </ImageBackground>
        <TextInput
          placeholder="Sign Up"
          autoCapitalize="words"
          blurOnSubmit={true}
          placeholderTextColor="rgba(0,0,0,1)"
          style={styles.textInput}
        ></TextInput>
      </View>
      <View style={styles.placeholderStack}>
        <TextInput
          placeholder="Email address"
          autoCorrect={true}
          blurOnSubmit={true}
          defaultValue=""
          numberOfLines={3}
          maxLength={80}
          style={styles.placeholder}
        ></TextInput>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.rect}></View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled1")}
        style={styles.button}
      >
        <TextInput
          placeholder="Continue"
          placeholderTextColor="rgba(255,255,255,1)"
          style={styles.textInput2}
        ></TextInput>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(203,248,227,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 516,
    width: 356
  },
  image_imageStyle: {},
  icon: {
    color: "rgba(1,1,1,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 35,
    marginLeft: 6
  },
  textInput: {
    top: 437,
    left: 26,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 88,
    width: 300,
    fontSize: 46
  },
  imageStack: {
    width: 356,
    height: 525,
    marginTop: 14,
    marginLeft: 10
  },
  placeholder: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 93,
    width: 353,
    fontSize: 20
  },
  rect2: {
    top: 92,
    left: 0,
    width: 247,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(109,109,109,1)"
  },
  placeholderStack: {
    width: 353,
    height: 93,
    marginTop: 39,
    marginLeft: 36
  },
  rect: {
    width: 159,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 12,
    marginLeft: 100
  },
  button: {
    width: 256,
    height: 51,
    backgroundColor: "rgba(0,166,96,1)",
    borderWidth: 1,
    borderColor: "rgba(159,244,117,1)",
    borderRadius: 11,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    marginTop: 25,
    marginLeft: 59
  },
  textInput2: {
    fontFamily: "lato-regular",
    color: "#121212",
    height: 24,
    width: 175,
    fontSize: 24,
    marginTop: 14,
    marginLeft: 81
  }
});

export default Untitled;
