import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {post} from "./../../api/fetch";
import ListView from 'react-native-elements'
const showAllAssignments = ({ navigation }) => {
  const Assignments = navigation.getParam("other");
  const token = navigation.getParam("data");
  const id = navigation.getParam("id");
  const [validExtension, setValidExtension] = useState(false);
  console.log(id);
   async function postChange(_id){
    var params = {
      duration: id,
      assignmentID: _id,
    };
    
    var formBody=encodeData(params)
    console.log(formBody);
    let response = await post('/api/assignments/student/requestExtension',formBody)
    console.log(response)
    // useEffect(() => {
    //   async function postExtension() {
    //     let response = await post('/api/assignments/student/requestExtension',formBody)
    //     console.log(response)
    //     if(res.status==200){
    //       setValidExtension(True)
    //     }

    //   }
    //   postExtension()
    // },[])
    // console.log(formBody)
  };
  function encodeData(params){
    var formBody = [];
    for (var property in params) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    return formBody;
  }

  return (
    <LinearGradient
      colors={["#fbc2eb", "#a6c1ee"]}
      start={[0.1, 0.1]}
      style={styles.linearGradient}
    >
      <FlatList
        data={Assignments}
        renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
            >
              <MaterialIcons
                name="add"
                size={30}
                style={{ marginLeft: widthPercentageToDP("50%") }}
                onPress={() => (postChange(item._id))}
              />
              <Text
                style={{
                  fontSize: widthPercentageToDP("5%"),
                  textAlign: "center",
                  marginRight: widthPercentageToDP("5%"),
                  position: "absolute",
                  color: "#ffffffa8",
                }}
              >
                {item.assignmentName}
              </Text>
              <Text>{"\n"}</Text>
              <Text>{"\n"}</Text>
              <Text
                style={{
                  fontSize: widthPercentageToDP("3%"),
                  textAlign: "left",
                  marginRight: widthPercentageToDP("10%"),
                  color: "#fff",
                }}
              >
                {item.formattedDate}
              </Text>
            </TouchableOpacity>
        )}
        keyExtractor={(item) => item._id}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  item: {
    width: widthPercentageToDP("100%"),
    backgroundColor: "#ffffff03",
    marginTop: widthPercentageToDP("7%"),
    marginBottom: widthPercentageToDP("7%"),
    padding: widthPercentageToDP("3%"),
    marginHorizontal: 16,
    borderRadius: widthPercentageToDP("5%"),
  },
  linearGradient: {
    width: widthPercentageToDP("70%"),
    marginTop: widthPercentageToDP("2%"),
    marginBottom: widthPercentageToDP("2%"),
    alignSelf: "center",
    borderRadius: widthPercentageToDP("5%"),
  },
});
export default showAllAssignments;
