import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
    render() {
        console.log('this.props', this.props)
        return (
            <View>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
                <Text>EmployeeList</Text>
            </View>
        )
    }
}

export default EmployeeList