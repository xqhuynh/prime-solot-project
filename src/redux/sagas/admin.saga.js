import axios from 'axios';
import { takeEvery } from 'redux-saga/effects';

// Saga will listen for 'DELETE_ITEM' action from admin page view
function* deleteItem(action) {
    console.log('in deleteItem generator function');
    try {
        console.log('Delete item payload is:', action.payload);
        // action.payload should be id
        yield axios.delete('/api/cakes/' + action.payload)
    }
    catch (error) {
        console.log('Delete cake item failed', error);
    }
}

// Watcher function for 'DELETE_ITEM' dipatch and function
function* adminSaga() {
    yield takeEvery('DELETE_ITEM', deleteItem)
}

export default adminSaga;