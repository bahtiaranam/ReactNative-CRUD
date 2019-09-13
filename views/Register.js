import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Container, Button, Content, Form, Item, Input, Text} from 'native-base';
export default class Register extends Component {
  static navigationOptions = {
    title: 'Register',
    headerStyle: {
      backgroundColor: '#0080FF',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item last>
              <Input placeholder="Username" secureTextEntry={true} />
            </Item>
            <Item last>
              <Input placeholder="Password" autoCompleteType="password" />
            </Item>
            <Button block style={styles.mt}>
              <Text>Sign Up</Text>
            </Button>
          </Form>
          <View style={[styles.right, styles.mt]}>
            <Text style={styles.font_14}>Already have account ?</Text>
            <Text
              style={[styles.font_14, styles.blue, styles.ml]}
              onPress={() => this.props.navigation.navigate('Login')}>
              Sign In
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 20,
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  font_14: {
    fontSize: 14,
  },
  blue: {
    color: '#0080FF',
  },
  ml: {
    marginLeft: 10,
  },
});
