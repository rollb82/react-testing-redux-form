const reducer = (state = {
    policyHolder: {},
    drivers: [],
    vehicles: [],
    history: {},
    claims: []
}, action) => {
    switch (action.type) {
        case 'PREPARING_DATA_FOR_SUBMIT':
            return {
                ...state,
                policyHolder: action.payload
            }
        case 'LOAD_INITIAL_DATA':
            return {
                ...state,
                policyHolder: action.payload
            }
        default:
            return state
    }
}

export default reducer;