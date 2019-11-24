import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import {Item, Input, Form, Label, Button, Thumbnail, Text} from 'native-base';
import axios from 'axios';
import Logo from '../image/github.png';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.login = this.login.bind(this);
  }

  static navigationOptions = {
    title: 'Sign In',
    headerStyle: {
      backgroundColor: '#3498db',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  login = () => {
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
          .post('https://reqres.in/api/login', data)
          .then(function(res) {
            console.log(res);
            Alert.alert('Notification', 'Login Success');
          })
          .catch(function(error) {
            console.log(error);
            Alert.alert('Notification', 'Login Failed');
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const {email, password, isLoading} = this.state;
    return (
      <View style={styles.containerStyle} isLoading={isLoading}>
        <View style={styles.logoStyle}>
          <Thumbnail square large source={Logo} />
          <Text style={styles.textLogoStyles}>
            React Native {'\n'}SignIn your account below
          </Text>
        </View>
        <Form style={styles.formLoginStyle}>
          <Item floatingLabel>
            <Label>
              <Text style={styles.inputStyle}>Username</Text>
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
              style={styles.inputStyle}
              value={password}
              onChangeText={value => this.setState({password: value})}
            />
          </Item>
        </Form>
        <Button
          block
          info
          style={styles.footerBottomStyle}
          onPress={this.login}>
          <Text style={styles.btnText}>Sign In</Text>
        </Button>
        <View style={styles.viewBtn}>
          <Text style={styles.question}>Doesn't have account ? </Text>
          <TouchableOpacity>
            <Text
              style={styles.toRegister}
              onPress={() => this.props.navigation.navigate('Register')}>
              Sign Up
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
