import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS
} from './types'

export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {
            prop,
            value
        }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    console.info('name, phone, shift', name, phone, shift)

    const { currentUser } = firebase.auth()
    console.info('currentUser', currentUser)

    return (dispatch) => {
        // path to our json data structure, save in the database and go back to previous screen
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE })
                Actions.pop({ type: 'reset' })
            })
    }
}

export const employeesFetch = () => {
    const { currentUser } = firebase.auth()
    console.info('currentUser', currentUser)

    return (dispatch) => {
        // any time any data calls this function that describes the data (snapshot), not the array of employees
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}