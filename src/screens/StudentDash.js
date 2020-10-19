import React, { useState } from 'react';
import { View, Text, Button ,StyleSheet} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { getToken } from"./../api/token";
import jwt_decode from "jwt-decode";
const StudentDash = ({ navigation }) => {
  var token = "";
  async () => {   
    token =  await getToken();
  }
console.log(token)
var decoded = jwt_decode(token);
console.log(decoded)

  return (
    <Text style={styles.heading}>Hello, Person</Text>
  );
};
const styles = StyleSheet.create({
    heading: {
      fontWeight:'100',
      fontSize:widthPercentageToDP('10%'),
      fontFamily:'sans-serif'
    }
})
export default StudentDash;
