import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Saga will listen for 'ADD_ORDER_ITEMS' dispatch 
function* addOrderToDb(action) {
    console.log('In addToCart');
    try {
        const res = yield axios.post('/api/cart', action.payload)
        // yield put({
        //     type: "SET_CHECKOUT_ORDER",
        //     payload: res.data
        // })
    }
    catch (error) {
        console.log('Checkout post failed', error);
    }
}

function* checkoutSaga() {
    yield takeEvery('ADD_ORDER_ITEMS', addOrderToDb)
}

export default checkoutSaga;