import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignupScreen from './src/screens/SignupScreen';  
import FirstScreen from './src/screens/FirstScreen';
import AdminDash  from './src/screens/AdminDash'
import ShopScreen from './src/screens/ShopScreen'
import LoginScreen  from './src/screens/LoginScreen'
import StudentDash from './src/screens/StudentDash'
const AppNavigator = createStackNavigator(
  {
    First: FirstScreen,
    Signup: SignupScreen,
    AdminDash:AdminDash,
    LoginScreen:LoginScreen,
    ShopScreen:ShopScreen,
    StudentDash:StudentDash
  },
  {
    initialRouteName: 'First',
  },
);

export default createAppContainer(AppNavigator);