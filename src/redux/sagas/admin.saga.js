import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Saga will listen for 'DELETE_ITEM' action from admin page view
function* deleteItem(action) {
    console.log('in deleteItem generator function', action);
    try {
        // action.payload should be id
        yield axios.delete(`/api/cakes/` + action.payload.id)
        // axios.get to FETCH_CAKES after delete item 
        const res = yield axios.get('/api/cakes')
        yield put({
            type: 'SET_CAKES',
            payload: res.data
        })
    }
    catch (error) {
        console.log('Delete cake item failed', error);
    }
}

// Watcher function for 'DELETE_ITEM' dipatch and function
function* adminSaga() {
    yield takeEvery('DELETE_ITEM', deleteItem),
        yield takeEvery('FETCH_CAKES', deleteItem)
}

export default adminSaga;