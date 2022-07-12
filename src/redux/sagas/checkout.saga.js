import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Saga will listen for 'ADD_ORDER_ITEMS' dispatch 
function* addOrderToDb(action) {
    console.log('In addToCart', action.payload);
    try {
        yield axios.post('/api/cakes', action.payload)
    }
    catch (error) {
        console.log('Checkout post failed', error);
    }
}

function* checkoutSaga() {
    yield takeLatest('ADD_ORDER_ITEMS', addOrderToDb)
}

export default checkoutSaga;