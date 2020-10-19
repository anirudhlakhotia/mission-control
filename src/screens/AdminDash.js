import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createAccount } from '../api/authentication';
import SignupForm from '../forms/SignupForms';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
const AdminDash = ({ navigation }) => {
  return (
    <Text>Hello this is admin dash</Text>
  );
};

export default AdminDash;
