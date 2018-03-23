import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log('state', state)
    console.log('AuthReducer action', action)

    switch (action.type) {
        case EMAIL_CHANGED:
            console.log('EMAIL_CHANGED', EMAIL_CHANGED)
            return { ...state, email: action.payload }
        case PASSWORD_CHANGED:
            console.log('PASSWORD_CHANGED', PASSWORD_CHANGED)
            return { ...state, password: action.payload }
        default:
            return state
    }
}