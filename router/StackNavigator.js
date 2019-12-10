import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../src/components/LoginForm';
import HomeScreen from '../src/components/Home';

export const LoginStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
});

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteParams: 'Home'},
);
