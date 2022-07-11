const cartReducer = (state = [], action) => {
    console.log('in cart reducer');
    switch (action.type) {
        case 'SET_CART':
            return action.payload;
        default:
            return state;
    }
}

export default cartReducer;