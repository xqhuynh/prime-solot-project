import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Saga will listen for "FETCH_ACTIVE_CAKE" action on page load
function* fetchActiveCake(action) {
    console.log('in fetchActiveCake');
    try {
        const res = yield axios.get(`/api/cakes/${action.payload}`)

        yield put({
            type: 'SET_ACTIVE_CAKE',
            payload: res.data
        })
    }
    catch (error) {
        console.log('fetchActiveCake failed', error);
    }
}

function* cakeDetailSaga() {
    yield takeEvery('FETCH_ACTIVE_CAKE', fetchActiveCake)
}

export default cakeDetailSaga;