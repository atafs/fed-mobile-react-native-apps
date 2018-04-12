import { map } from 'lodash'
import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import { employeesFetch } from "../actions";

import EmployeeListItem from './EmployeeListItem'

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch()
    }

    renderRow(employee) {
        console.log('employee.item', employee.item)
        return <EmployeeListItem employee={employee.item} />
    }

    render() {
        const { employees } = this.props

        return (
            <FlatList
                data={ employees }
                renderItem={(employee) => this.renderRow(employee)}
            />
        )
    }
}

const mapStateToProps = state => {
    // convert from object to array
    const employees = map(state.employees, (val, uid) => {
        console.log('val, uid', val, uid)
        return { ...val, uid }
    })

    return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)