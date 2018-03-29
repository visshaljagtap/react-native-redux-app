import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';
var validators = require('./validators').validators();

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    // Use of react-navigation
    // const { navigate } = this.props.navigation;
    // navigate("employeeList", {screen: "Emp List"}) # Use of react-navigation
    const { email, password } = this.props;
    if (email === '' || (!validators.RegularExpressionEmail(this.props.email))) {
      Alert.alert('Enter a valid email');
    }
    else {
      this.props.loginUser({ email, password });
    }
  }

  onSignUpButtonPress(){
    Actions.signup();
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.onButtonPress.bind(this)}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButtonContainer} onPress={this.onSignUpButtonPress.bind(this)}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <TextInput style={styles.input}
          autoCapitalize="none"
          onChangeText={this.onEmailChange.bind(this)}
          autoCorrect={false}
          value={this.props.email}
          keyboardType='email-address'
          returnKeyType="next"
          placeholder='Email'
          placeholderTextColor='rgba(225,225,225,0.7)' />

        <TextInput style={styles.input}
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password} placeholder='Password'
          placeholderTextColor='rgba(225,225,225,0.7)'
          secureTextEntry />

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  mainButtonContainer: {
    paddingTop: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  loginButton: {
    backgroundColor: '#2980b6',
    color: '#fff'
  }

});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
