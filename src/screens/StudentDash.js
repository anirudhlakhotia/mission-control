import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import { getToken } from "./../api/token";
import jwt_decode from "jwt-decode";
import { LinearGradient } from "expo-linear-gradient";
const StudentDash = ({ navigation }) => {
  var token = navigation.getParam("data");
  const DATA = [
    {
      id: "1",
      title: "First Assignment",
      color1: "#9795EF",
      color2: "#F9C5D1",
      duedate:'Due Date 1'
    },
    {
      id: "2",
      title: "Second Assignment",
      color1: "#fbc2eb",
      color2: "#a6c1ee",
      duedate:'Due Date 2'
    },
    {
      id: "3",
      title: "Third Assignment",
      color1: "#F39FDC",
      color2: "#9AB5E1",
      duedate:'Due Date 3'
    },
  ];
  

  var decoded = jwt_decode(token);
  const goToShop=()=>{
    navigation.navigate('ShopScreen')
  }
  return (
    <View style={{position:'absolute',alignSelf:'center'}}>

      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.greeting}>Hi, {decoded.username}</Text>
      <Text>{"\n"}</Text>
      <Text style={{ textAlign: "center", color: "#C0C0C0" }}>
        You currently have 0 points
        <TouchableOpacity onPress={goToShop}>
        <Image
            source={{ uri: "https://www.flaticon.com/svg/static/icons/svg/1077/1077290.svg" }}
            style={{
              width: widthPercentageToDP("5%"),
              height: heightPercentageToDP("5%"),
              resizeMode:'contain',
              position: "absolute",
              marginLeft:widthPercentageToDP('2%'),
              marginTop:heightPercentageToDP('-3%')
              
            }}
          />
          </TouchableOpacity>
      </Text>
      
      <Text>{"\n"}</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <LinearGradient
              colors={[item.color1, item.color2]}
              start={[0.1, 0.1]}
              style={styles.linearGradient}
            >
              <TouchableOpacity style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.duedate}>{item.duedate}</Text>
              </TouchableOpacity>
             </LinearGradient>
          )}
          keyExtractor={(item) => item.id}
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
    backgroundColor: "#ffffff03",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: widthPercentageToDP("5%"),
  },
  title: {
    fontSize: widthPercentageToDP('2.5%'),
    color:'#ffffff8f',
    alignSelf:'center',
    position:'relative',
    marginTop:widthPercentageToDP('-5%'),
    marginRight:widthPercentageToDP('15%')
  },
  duedate: {
    fontSize: widthPercentageToDP('5%'),
    fontWeight:'200',
    color:'white',
    alignSelf:'center',
    position:'relative',
    marginTop:widthPercentageToDP('2%'),
    marginRight:widthPercentageToDP('15%')
  },
  linearGradient: {
    width: widthPercentageToDP("70%"),
    marginTop: widthPercentageToDP("3%"),
    alignSelf: "center",
    borderRadius: widthPercentageToDP("5%"),
  },
});
export default StudentDash;
