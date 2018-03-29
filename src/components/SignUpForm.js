import React, { Component } from 'react'
import { Card, CardSection, Button, Input } from './common'
import { View, Alert } from 'react-native'
import { emailChanged, passwordChanged, signUpUser } from '../actions';
import { connect } from 'react-redux';
var validators = require('./validators').validators();

class SignUpForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
      }
    
      onPasswordChange(text) {
        this.props.passwordChanged(text);
      }

    onButtonPress() {
        const { email, password } = this.props;
        if (email === '' || (!validators.RegularExpressionEmail(this.props.email))) {
            Alert.alert('Enter a valid email');
        }
        else {
            this.props.signUpUser({ email, password });
        }
    }

    render() {
        return (
            <View style={{ paddingTop: 65 }}>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="Jane"
                            onChangeText={this.onEmailChange.bind(this)}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Password"
                            secureTextEntry
                            onChangeText={this.onPasswordChange.bind(this)}
                        />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Create Account
                    </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { email, password } = auth;
  
    return { email, password };
  };

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, signUpUser
})(SignUpForm);
