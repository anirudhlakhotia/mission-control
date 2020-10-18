import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createAccount } from '../api/authentication';
import SignupForm from '../forms/SignupForms';

const SignupScreen = ({ navigation }) => {
  return (
    <SignupForm
      buttonText="Sign up"
      onSubmit={createAccount}
      onAuthentication={() => navigation.navigate('Home')}
    >
        <br>
        </br>
      <Button
        color="black"
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </SignupForm>
  );
};

export default SignupScreen;
