const cakeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CAKES':
            return action.payload;
        default:
            return state;
    }
}

export default cakeReducer;