import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* saveCake(action) {
    yield axios.put(`/cakes/${action.payload}`, action.payload)
    // Refresh page with latest cake data
    yield put({
        type: 'FETCH_CAKES'
    })
}

export default saveCake;