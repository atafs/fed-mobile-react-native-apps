import React, {Component} from 'react';
import { Card, CardSection, Input, Button } from './common'
import { emailChanged } from "../actions";

import { connect } from 'react-redux';

class LoginForm extends Component {
    onEmailChange(text) {
        // call an action creator to update changed text
        this.props.emailChanged(text)
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeHolder="email@email.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeHolder="password"
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    console.log('state', state)

    return { email: state.auth.email }
};

export default connect(mapStateToProps, { emailChanged })(LoginForm)
