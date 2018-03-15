import { EMAIL_CHANGED } from "../actions/types";

const INITIAL_STATE = { email: '' }

export default (state = INITIAL_STATE, action) => {
    console.log('action', action)

    switch (action.type) {
        case EMAIL_CHANGED:
            console.log('EMAIL_CHANGED', EMAIL_CHANGED)

            return { ...state, email: action.payload }
        default:
            return state
    }
}