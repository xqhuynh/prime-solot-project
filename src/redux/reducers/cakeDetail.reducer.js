const activeCake = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CAKE':
            return action.payload;
        default:
            return state;
    }
}

export default activeCake;