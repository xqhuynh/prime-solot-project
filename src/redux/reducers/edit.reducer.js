const editCake = (state = {}, action) => {
    console.log('Edit reducer payload is', action.payload);
    switch (action.type) {
        case "UPDATE_ACTIVE_CAKE":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default editCake;