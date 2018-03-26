import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
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
        case LOGIN_USER:
            console.log('LOGIN_USER', LOGIN_USER)
            return { ...state, loading: true, error: '' }
        case LOGIN_USER_SUCCESS:
            console.log('LOGIN_USER_SUCCESS', LOGIN_USER_SUCCESS)
            return { ...state, ...INITIAL_STATE, user: action.payload }
        case LOGIN_USER_FAIL:
            console.log('LOGIN_USER_FAIL', LOGIN_USER_FAIL)
            return { ...state, error: 'Authentication Failed!!', password: '', loading: false }
        default:
            return state
    }
}