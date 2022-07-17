import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Saga will listen for "FETCH_CAKES" dispatch on page load
function* fetchAllCakes() {
    // Get all cakes
    console.log('In fetchAllCakes saga');
    try {
        const res = yield axios.get('/api/cakes')
        console.log('Get all cakes:', res.data);
        yield put({
            type: 'SET_CAKES',
            payload: res.data
        })
    }
    catch (error) {
        console.log('GET cakes request failed', error);
    }
}

// Saga will listen for "ADD_CAKE" dispatch on AddItemForm
function* addCake(action) {
    console.log('In addCake saga');
    try {
        yield axios.post('/api/cakes', action.payload)
        console.log('Add cake action.payload', action.payload);
        // Fetch all cakes after adding new cake
        yield put({
            type: 'FETCH_CAKES'
        })
    }
    catch (error) {
        console.log('Add cake request failed', error);
    }
}

function* cakesSaga() {
    yield takeEvery('FETCH_CAKES', fetchAllCakes);
    yield takeEvery('ADD_CAKE', addCake);
}

export default cakesSaga;