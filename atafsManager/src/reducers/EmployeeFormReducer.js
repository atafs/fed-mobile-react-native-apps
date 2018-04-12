import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE
} from "../actions/types";

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log('action', action)

    switch (action.type) {
        case EMPLOYEE_UPDATE:
            console.log('EMPLOYEE_UPDATE', EMPLOYEE_UPDATE)

            // action.payload === { prop: 'name', value: 'Americo' }
            return {
                ...state,
                [action.payload.prop]: action.payload.value }
        case EMPLOYEE_CREATE:
            console.log('EMPLOYEE_CREATE', EMPLOYEE_CREATE)
            return INITIAL_STATE

        default:
            return state
    }
}