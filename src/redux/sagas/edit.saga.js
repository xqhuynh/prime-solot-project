import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Generator function to save cake to db afater edit
function* saveCake(action) {
    console.log('Action payload is', action.payload);
    yield axios.put(`/api/cakes/${action.payload.id}`, action.payload)
    // Refresh page with latest cake data
    yield put({
        type: 'FETCH_CAKES'
    })
}

function* editSaga() {
    yield takeEvery('SAVE_CAKE', saveCake)
}

export default editSaga;