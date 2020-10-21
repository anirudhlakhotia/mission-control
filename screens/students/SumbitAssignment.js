import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
class SubmitAssignment extends Component {
    render(){
        return(
        <TouchableOpacity style={styles.touchableopacity2}>
            <LinearGradient
              colors={["#434343", "#434343"]}
              start={[0.1, 0.1]}
              style={styles.linearGradient}
            >
              <View style={styles.imgrow}>
                <Image
                  source={{
                    uri:
                      "https://img.icons8.com/cotton/64/000000/upload-to-cloud.png",
                  }}
                  style={{
                    width: wp("20%"),
                    height: hp("20%"),
                    resizeMode: "center",
                    flexDirection: "row",
                    marginLeft: wp("5%"),
                  }}
                />
                <Text
                  style={{
                    alignSelf: "center",
                    fontWeight: "100",
                    fontFamily: "sans-serif",
                    color: "white",
                    fontSize:widthPercentageToDP('4%')
                  }}
                >
                  {" "}
                 CLICK TO SUBMIT
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
         ) }
  
}
const styles = StyleSheet.create({
    heading: {
      fontWeight: "bold",
      color: "#25252a",
      fontSize: wp("8%"),
      fontFamily: "sans-serif",
      alignSelf: "center",
    },
    content: {
      fontWeight: "100",
      color: "#bab9b6",
      fontSize: wp("4%"),
      fontFamily: "sans-serif",
      maxWidth: wp("80%"),
      flexShrink: 1,
      alignSelf: "center",
    },
    touchableopacity2: {
      borderRadius: wp("5%"),
      width: wp("70%"),
      height:hp('10%'),
      alignSelf: "center",
      position: "absolute",
      marginTop: hp("40%"),
    },
    imgrow: {
      flex: 1,
      flexDirection: "row",
    },
    linearGradient: {
      borderRadius: wp("5%"),
    },
  });

export default SubmitAssignment;