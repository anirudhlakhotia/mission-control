import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { login } from '../api/authentication';
import SignupForm from '../forms/SignupForms';
import { getUsers } from '../api/users';

const LoginScreen = ({ navigation }) => {
const [state, setState] = useState({
    Name:'',
  })

  return (
   
    <SignupForm
      buttonText="Log in"
      onSubmit={login}
      onAuthentication={() => navigation.navigate('Home')}
    >
      <br>
      </br>
      <Button 
        color='black'
        title="Create account"
        onPress={() => navigation.navigate('Signup')}
      />  
  
  <Text style={{marginTop:20}}>{state.Name}</Text>
    </SignupForm>
  );
};

export default LoginScreen;