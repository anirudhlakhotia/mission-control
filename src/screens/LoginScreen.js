import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Image,Dimensions,ScrollView,TextInput} from 'react-native';
import { login } from '../api/authentication';
import SignupForm from '../forms/SignupForms';
import { getUsers } from '../api/users';
import  Untitled from '../forms/src/screens/Untitled'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const FirstScreen = ({ navigation }) => {
// const [state, setState] = useState({
//     Name:'',
//     Email:'',
//   })

const print= ()=>{
  // console.log(state.Email)
  // if(state.Email){
  navigation.navigate('ShopScreen')
  // }
}

  return (
  //  <Untitled></Untitled>
   <View style={styles.container}>
     <Image source={{uri: 'https://www.happyschool.com/images/heroimg.svg'}}
       style={{width: wp('60%'), height: hp('50%'),resizeMode:'center',marginLeft:wp('10%'),marginTop:wp('-10%')}} />
       <Text style={styles.text}>Hey There</Text>

      {/* <TextInput 
        label="Email"
        placeholder="Email"
        value={state.Email}
        blurOnSubmit={false}
        maxLength={100}
        onChangeText={(text) => setState({Email: text})}
        style={{fontSize:wp('5%'),size:wp('5%'),marginTop:wp('5%'),marginLeft:wp("10%")}}
      /> */}
  <TouchableOpacity style={styles.button} onPress={print}>
    <Text>Continue</Text>
  </TouchableOpacity>
   </View>
  //   <SignupForm
  //     buttonText="Log in"
  //     onSubmit={login}
  //     onAuthentication={() => navigation.navigate('Home')}
  //   >
  //     <br>
  //     </br>
  //     <Button 
  //       color='black'
  //       title="Create account"
  //       onPress={() => navigation.navigate('Signup')}
  //     />  
  
  // <Text style={{marginTop:20}}>{state.Name}</Text>
  //   </SignupForm>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:"rgba(203,248,227,1)",
    resizeMode: 'cover',
    flex: 1,
  },
  text:{
    fontSize:wp('10%'),
    marginLeft:wp('10%')
  },
  button:{
    marginTop:wp('15%'),
    width:wp('60%'),
    fontSize:wp('20%'),
    
    textAlign:'center',
    paddingTop:wp('3%'),
    height:wp('10%'),
    backgroundColor:'white',
    color:'white',
    borderRadius:5,
    marginLeft:wp('10%')
  }
})


export default FirstScreen;