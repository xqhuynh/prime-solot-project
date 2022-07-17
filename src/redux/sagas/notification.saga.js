import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Saga will listen for "FETCH_SMS" dispatch on SuccessPage
function* fetchSms() {
    try {
        const res = yield axios.get('/api/notification')
        console.log('Get SMS', res.data);
    }
    catch (error) {
        console.log('Error sending SMS', error);
    }
}

function* smsSaga() {
    yield takeEvery("FETCH_SMS", fetchSms)
}

export default smsSaga;