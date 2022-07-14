import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* saveCake(action) {
    console.log('Action payload is', action.payload);
    yield axios.put(`/api/cakes/` + action.payload.id)
    // Refresh page with latest cake data
    yield put({
        type: 'FETCH_CAKES'
    })
}

function* editSaga() {
    yield takeEvery('SAVE_CAKE', saveCake)
}

export default editSaga;