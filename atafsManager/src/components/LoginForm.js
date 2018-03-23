import React, {Component} from 'react';
import { Card, CardSection, Input, Button } from './common'
import { emailChanged, passwordChanged, loginUser } from "../actions";

import { connect } from 'react-redux';

class LoginForm extends Component {
    onEmailChange(text) {
        // call an action creator to update changed text
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const { email, password } = this.props;

        console.log('onButtonPress email && password', this.props.email, this.props.password)
        this.props.loginUser({ email, password })
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state)
    const { email, password } = state.auth

    return { email, password }
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm)
