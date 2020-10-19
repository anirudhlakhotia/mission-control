import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class ShopScreen extends Component {
  state = {
    count: 0
  }
  render(){
      return (
      <View style={styles.container}>
          <Text>{"\n"}</Text>
          <Text style={styles.heading}> Collect your Rewards!</Text>
      <Text>{"\n"}</Text>
      <Text style={styles.content}>Choose from either extensions in Assignment Submission Date, or The Fantastic Dark Mode</Text>
      <Text>{'\n'}</Text>
    <TouchableOpacity style={styles.touchableopacity}>
    <View style={styles.imgrow}>
       <Image source={{uri: 'https://img.icons8.com/color/48/000000/night-landscape.png'}} 
       style={{width: wp('15%'), height: hp('15%'),resizeMode:'center',flexDirection:'row',float:"left",marginLeft:wp('5%')}} /> 
        <Text style={{alignSelf:'center', fontWeight:'100',fontFamily:'sans-serif'}}>Dark Mode</Text>
        <Text style={{position:'absolute',right:wp('5%'),top:wp('5%'),fontWeight:'bold'}}>200</Text>
        </View>
    </TouchableOpacity> 
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
     <TouchableOpacity style={styles.touchableopacity}>
    <View style={styles.imgrow}>
       <Image source={{uri: 'https://img.icons8.com/cute-clipart/64/000000/calendar-1.png'}} 
       style={{width: wp('15%'), height: hp('15%'),resizeMode:'center',flexDirection:'row',float:"left",marginLeft:wp('5%')}} /> 
        <Text style={{alignSelf:'center', fontWeight:'100',fontFamily:'sans-serif'}}>  1 Day Extension</Text>
        <Text style={{position:'absolute',right:wp('5%'),top:wp('5%'),fontWeight:'bold'}}>200</Text>
        </View>
    </TouchableOpacity>  
    <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
     <TouchableOpacity style={styles.touchableopacity}>
    <View style={styles.imgrow}>
       <Image source={{uri: 'https://img.icons8.com/cute-clipart/64/000000/calendar-2.png'}} 
       style={{width: wp('15%'), height: hp('15%'),resizeMode:'center',flexDirection:'row',float:"left",marginLeft:wp('5%')}} /> 
        <Text style={{alignSelf:'center', fontWeight:'100',fontFamily:'sans-serif'}}>  2 Day Extension</Text>
        <Text style={{position:'absolute',right:wp('5%'),top:wp('5%'),fontWeight:'bold'}}>200</Text>
        </View>
    </TouchableOpacity>
    <Image source={{uri: 'https://img.icons8.com/nolan/48/prize.png'}} 
       style={{width: wp('20%'), height: hp('20%'),resizeMode:'center',marginBottom:wp('10%'),position:'relative',marginTop:-wp('6%')}} /> 
    </View>
      
      )
  }
}


const styles = StyleSheet.create({
    container:{
      backgroundColor:"#ffffff",
      resizeMode: 'cover',
      flex: 2,
    },
    heading:{
        fontWeight:"bold",
        color:"#25252a",
        fontSize:wp("8%"),
        fontFamily:'sans-serif',
        alignSelf:'center'
    },
    content:{
        fontWeight:"100",
        color:"#bab9b6",
        fontSize:wp("4%"),
        fontFamily:'sans-serif',
        maxWidth:wp("80%"),
        flexShrink: 1,
        alignSelf:'center',
       
    },
    touchableopacity:{
        borderRadius:wp('5%'),
        backgroundColor:"#f9f9f9",
        width:wp('90%'),
        alignSelf:'center',
    },
    imgrow:{
        flex:1,
        flexDirection:'row'
    }
  })
export default ShopScreen