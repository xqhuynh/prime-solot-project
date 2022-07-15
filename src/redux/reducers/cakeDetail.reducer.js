// Reducer to store active cake selected for EditForm and CakeDetail components

const activeCake = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACTIVE_CAKE':
            return action.payload;
        case "UPDATE_ACTIVE_CAKE":
            // spread state and action.payload to bring over everything
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default activeCake