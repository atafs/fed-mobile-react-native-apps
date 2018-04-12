import _ from 'lodash'
import React, { Component } from 'react'
import { FlatList, View, Text } from 'react-native'
import { connect } from 'react-redux'

import { employeesFetch } from "../actions";

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch()
    }

    render() {
        const { employees } = this.props
        console.log('employees', employees)

        return (
            <FlatList
                data={ this.props.employees }
                renderItem={({item}) => <Text>{item.name}</Text>}
            />
        )
    }
}

const mapStateToProps = state => {
    // convert from object to array
    const employees = _.map(state.employees, (val, uid) => {
        console.log('val, uid', val, uid)
        return { ...val, uid }
    })

    return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)