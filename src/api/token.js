import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@auth_token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('@auth_token', token);
    console.log('SET TOKEN')
  } catch (e) {
    return null;
  }
};