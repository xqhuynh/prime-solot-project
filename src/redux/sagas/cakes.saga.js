import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Saga will listen for "FETCH_CAKES" dispatch on page load
function* fetchAllCakes() {
    console.log('In fetchAllCakes saga');
    try {
        const res = yield axios.get('/api/cakes')
        console.log('Get all:', res.data);
        yield put({
            type: 'SET_CAKES',
            payload: res.data
        })
    }
    catch (error) {
        console.log('GET cakes request failed', error);
    }
}

function* cakesSaga() {
    yield takeEvery('FETCH_CAKES', fetchAllCakes)
}

export default cakesSaga;