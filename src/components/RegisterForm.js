import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Item, Input, Form, Label, Button, Thumbnail, Text} from 'native-base';

import Logo from '../image/github.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
// import axios from 'axios';
export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      errors: [],
    };
    this.register = this.register.bind(this);
  }

  static navigationOptions = {
    title: 'Sign Up',
    headerStyle: {
      backgroundColor: '#3498db',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  //Register
  register = () => {
    const {email, password} = this.state;
    const data = {
      email: email,
      password: password,
    };

    //clickButton
    if (email.length === 0) {
      Alert.alert('Notification', 'Email required');
    }
    if (password.length === 0) {
      Alert.alert('Notification', 'Password required');
    } else {
      try {
        axios
          .post('https://reqres.in/api/register', data)
          .then(function(res) {
            console.log(res);
            Alert.alert('Notification', 'Login Success');
          })
          .catch(function(error) {
            console.log(error);
            Alert.alert('Notification', 'Register Failed');
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const {email, password} = this.state;
    return (
      <View style={styles.containerStyle}>
        <View style={styles.logoStyle}>
          <Thumbnail square large source={Logo} />
          <Text style={styles.textLogoStyles}>
            React Native {'\n'}Create your account below
          </Text>
        </View>
        <Form style={styles.formLoginStyle}>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Email</Text>
            </Label>
            <Input
              style={styles.inputStyle}
              value={email}
              onChangeText={value => this.setState({email: value})}
            />
          </Item>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Password</Text>
            </Label>
            <Input
              secureTextEntry
              value={password}
              style={styles.inputStyle}
              onChangeText={value => this.setState({password: value})}
            />
          </Item>
        </Form>
        <Button
          block
          info
          style={styles.footerBottomStyle}
          onPress={this.register}>
          <Text style={styles.btnText}>Sign Up</Text>
        </Button>
        <View style={styles.viewBtn}>
          <Text style={styles.question}>Already have Account ? </Text>
          <TouchableOpacity>
            <Text
              style={styles.toRegister}
              onPress={() => this.props.navigation.navigate('Login')}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#3498db',
    width: '100%',
    height: '100%',
  },
  logoStyle: {
    marginTop: 70,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogoStyles: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    color: 'white',
  },
  formLoginStyle: {
    marginTop: -30,
    paddingLeft: 10,
    paddingRight: 30,
  },
  inputStyle: {
    color: 'white',
    fontSize: 16,
  },
  footerBottomStyle: {
    marginTop: 26,
    paddingTop: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 16,
    marginTop: 10,
    color: 'white',
  },
  toRegister: {
    fontSize: 16,
    marginTop: 10,
    color: '#6c5ce7',
  },
  viewBtn: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
