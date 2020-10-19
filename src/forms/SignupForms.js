import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';
import { setToken } from '../api/token';
import { createAccount } from '../api/authentication';
const SignupForm = ({ buttonText, onSubmit, children, onAuthentication ,navigation}) => {
  const [name, onChangeName] = useState('');
  const [password, onChangePassword] = useState('');
  const [confpassword, onChangeConfPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const[email,onChangeEmail]=useState('');
  // const submit = () => {
  //   onSubmit(email, password)
  //     .then(async (res) => {
  //       await setToken(res.auth_token);
  //       onAuthentication();
  //     })
  //     .catch((res) => {
  //       if (res && res.error) {
  //         setErrorMessage(res.error);
  //       }

  //       setErrorMessage('Something went wrong.');
  //     });
  // };
const submit=()=>{
  if (password == confpassword){
    console.log('Yes')
  }
 else{
   console.log('No')
 }

}
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        placeholder='Enter your Name'
        style={styles.input}
        onChangeText={(text) => onChangeName(text)}
        value={name}
      />
      <TextInput
        placeholder='Enter your Password'
        style={styles.input}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        secureTextEntry
      />
       <TextInput
        placeholder='Confirm your Password'
        style={styles.input}
        onChangeText={(text) => onChangeConfPassword(text)}
        value={confpassword}
        secureTextEntry
      />
      <TextInput 
        label="Email"
        placeholder="Email"
        value={email}
        blurOnSubmit={false}
        maxLength={100}
        style={styles.input}
        onChangeText={(text) => onChangeEmail(text)}
      />
      {/* <Button title={buttonText} color='black' onPress={}/> */}
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    paddingLeft:10,
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default SignupForm;