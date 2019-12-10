import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/components/LoginForm';
import Register from './src/components/RegisterForm';
import Home from './src/components/Home/index';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
  Home: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);
