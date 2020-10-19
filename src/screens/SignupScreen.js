import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createAccount } from '../api/authentication';
import SignupForm from '../forms/SignupForms';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
const SignupScreen = ({ navigation }) => {
  return (
    <SignupForm>
      <Text>{"\n"}</Text>
      <Button
        color='black'
        title='Sign Up'
        onPress={()=> navigation.navigate('AdminDash')}>
      </Button>
      <Text>{"\n"}</Text>
      <Button style={{marginTop:10}}
        color="black"
        title="Back to first page"
        onPress={() => navigation.navigate('First')}
      />
    </SignupForm>
  );
};

export default SignupScreen;
