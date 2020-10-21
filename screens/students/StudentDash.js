import React, { useState,useEffect } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
   Modal,
  StatusBar,
} from "react-native";
import { Card, Button } from "react-native-elements";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { get } from "./../../api/fetch";
import jwt_decode from "jwt-decode";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const StudentDash = ({ navigation }) => {
  const [Assignments,setAssignments]=useState([])
  const [Points,setPoints]=useState(0)
  var token = navigation.getParam("data");
  useEffect(() => {
    async function getAssignments() {
      let response = await get('/api/student/assignment/getAssignments')
      console.log(response)
      setAssignments(response.data.object)
    }

    getAssignments()
  }, [])

  for (var j in Assignments) {
    var date = new Date(Assignments[j].assignment_data.dueDate * 1000);
    var formattedTime =
      date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    Assignments[j].formattedDate = formattedTime;
  }
  useEffect(() => {
    async function getPoints() {
      let response = await get('/api/student/getPoints')
      console.log(response.data)
      setPoints(response.data.points)
    }

    getPoints()
  }, [])
console.log('You have',Points)

var DATA1=[]
var DATA2=[]
var DATA3=[]
for(var i in Assignments){
  console.log(Assignments[i].assignment_data)
  DATA1=DATA1.concat([Assignments[i].assignment_data.assignmentName])
  DATA2=DATA2.concat([Assignments[i].formattedDate])
  DATA3=DATA3.concat([Assignments[i]._id])

}
console.log(DATA1)

  console.log(Assignments);
  const DATA = [
    {
      id: DATA3[0],
      title: DATA1[0],
      color1: "#9795EF",
      color2: "#F9C5D1",
      duedate: DATA2[0]
    },
    {
      id: DATA3[1],
      title: DATA1[1],
      color1: "#fbc2eb",
      color2: "#a6c1ee",
      duedate: DATA2[1]
    },
    {
      id: DATA3[2],
      title: DATA1[2],
      color1: "#F39FDC",
      color2: "#9AB5E1",
      duedate: DATA2[2]
    },
  ];

  var decoded = jwt_decode(token);
  const goToShop = () => {
    navigation.navigate("ShopScreen",{data:token,other:Assignments});
  };
const submitAssignment=(id)=>{
console.log('ID RECEIVED is',id)
navigation.navigate("SubmitAssignment",{id:id})
}
  return (
    <View style={{ position: "absolute", alignSelf: "center" }}>
      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.greeting}>Hi, {decoded.name}</Text>
      <Text>{"\n"}</Text>
      <Text style={{ textAlign: "center", color: "#C0C0C0" }}>
        You currently have {Points} points
        <TouchableOpacity onPress={goToShop}>
          <View>
            <Image
              source={{ uri: "https://img.icons8.com/nolan/64/gift.png" }}
              style={{
                width: widthPercentageToDP("8%"),
                height: heightPercentageToDP("8%"),
                resizeMode: "contain",
                // position: "absolute",
                marginLeft: widthPercentageToDP("2%"),
                marginTop: heightPercentageToDP("2%"),
              }}
            />
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={goToShop}>
              <View style={styles.imgrow}>
                <Image
                  source={{
                    uri:
                      "https://img.icons8.com/nolan/64/gift.png",
                  }}
                  style={{
                    width: widthPercentageToDP("6%"),
                    height: heightPercentageToDP("6%"),
                    resizeMode:'contain',
                    marginLeft: widthPercentageToDP("5%"),
                  }}
                />
             
              </View>
          </TouchableOpacity> */}
      </Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <LinearGradient
              colors={[item.color1, item.color2]}
              start={[0.1, 0.1]}
              style={styles.linearGradient}
            >
  <TouchableOpacity onPress={()=>{
    console.log(item)
    submitAssignment(item.id)}}>
              <TouchableOpacity style={styles.item} >

              {/* <MaterialCommunityIcons name="file-send" size={widthPercentageToDP('5%')} style={{alignSelf:'flex-end',marginRight:widthPercentageToDP('5%')}} color="#ffffffbf" onPress={console.log(item)}/> */}

                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.duedate}>{item.duedate}</Text>
              </TouchableOpacity>
              </TouchableOpacity>
            </LinearGradient>
          )}
          keyExtractor={(item) => item._id}
        />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  greeting: {
    fontWeight: "bold",
    fontSize: widthPercentageToDP("6%"),
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  content: {
    textAlign: "center",
    color: "#C0C0C0",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: widthPercentageToDP("80%"),
    backgroundColor: "transparent",
    // padding: widthPercentageToDP('2%'),
    // marginVertical: 8,
    marginVertical: heightPercentageToDP('5%'),
    // borderRadius: widthPercentageToDP("5%"),
    borderColor: "transparent",
    textAlign: "center",
    borderWidth: 0,
    marginBottom:widthPercentageToDP('2%'),
  },
  title: {
    fontSize: widthPercentageToDP("4%"),
    color: "#ffffff8f",
    textAlign: "center",
    position: "relative",
    marginTop: widthPercentageToDP("-5%"),
  },
  duedate: {
    fontSize: widthPercentageToDP("5%"),
    fontWeight: "200",
    color: "white",
    alignSelf: "center",
    position: "relative",
    marginTop: widthPercentageToDP("2%"),
  },
  linearGradient: {
    width: widthPercentageToDP("70%"),
    marginTop: widthPercentageToDP("3%"),
    alignItems: "center",
    borderRadius: widthPercentageToDP("5%"),
    textAlign: "center"
  },
  imgrow: {
    flex: 1,
    flexDirection: "row",
  },
});
export default StudentDash;
