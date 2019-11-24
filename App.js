import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './src/components/LoginForm';
import Register from './src/components/RegisterForm';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
});

export default createAppContainer(AppNavigator);
