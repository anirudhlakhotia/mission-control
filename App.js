import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);