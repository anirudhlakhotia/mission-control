import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import FirstScreen from './src/screens/LoginScreen';
import AdminDash  from './src/screens/AdminDash'
import ShopScreen from './src/screens/ShopScreen'
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    First: FirstScreen,
    Signup: SignupScreen,
    AdminDash:AdminDash,
    ShopScreen:ShopScreen
  },
  {
    initialRouteName: 'First',
  },
);

export default createAppContainer(AppNavigator);