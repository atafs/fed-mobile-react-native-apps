export default (state = null, action) => {
    console.log('action', action)

    switch (action.type) {
        case 'SELECTED_LIBRARY':
            return action.payload
        default:
            return state
    }
}