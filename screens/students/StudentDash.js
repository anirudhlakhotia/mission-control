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
// import { getToken } from "./../api/token";
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
      <Text style={styles.greeting}>Hi, {decoded.name}</Text>
      <Text>{"\n"}</Text>
      <Text style={{ textAlign: "center", color: "#C0C0C0" }}>
        You currently have 0 points
        <TouchableOpacity onPress={goToShop}>
          <View>
        <Image
            source={{ uri: "https://img.icons8.com/nolan/64/gift.png" }}
            style={{
              width: widthPercentageToDP("7%"),
              height: heightPercentageToDP("7%"),
              resizeMode:'contain',
              // position: "absolute",
              marginLeft:widthPercentageToDP('2%'),
              marginTop:heightPercentageToDP('2%')
              
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
  imgrow: {
    flex: 1,
    flexDirection: "row",
  },
});
export default StudentDash;
