import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'

import { employeeUpdate } from "../actions";

import { Card, CardSection, Button } from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component {
    componentWillMount() {
        // get all the values and get them inside our form reducer
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    onButtonPress() {
        const { name, phone, shift } = this.props
        console.log('name, phone, shift', name, phone, shift)
    }

    render() {
        console.log('this.props', this.props)

        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={() => this.onButtonPress()} >
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm

    return { name, phone, shift }
}

export default connect(mapStateToProps, {
    employeeUpdate
})(EmployeeEdit)