// Reducer to add cart items to DB

const checkoutReducer = (state = [], action) => {
    console.log('in place order reducer');
    switch (action.type) {
        case "SET_CHECKOUT_ORDER":
            return action.payload;
        default:
            return state;
    }
}

export default checkoutReducer;