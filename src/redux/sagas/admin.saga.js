import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Saga will listen for 'DELETE_ITEM' action from admin page view
function* deleteInventoryItem(action) {
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

// Saga that will list for 'DELETE_ORDER_ITEM' from admin page 
function* deleteOrderItem(action) {
    console.log('in deleteOrderItem generator function');
    try {
        // action.payload should be id
        yield axios.delete(`/api/orders/` + action.payload.id)
        // axios.get to FETCH_CAKES after delete order item item 
        const res = yield axios.get('/api/orders')
        // Refresh page after deletion
        yield put({
            type: 'SET_ORDERS',
            payload: res.data
        })
    }
    catch (error) {
        console.log('Delete order item failed', error);
    }
}

// Saga that will listen for 'FETCH_ORDERS' from admin page to get all orders
function* fetchOrders() {
    console.log('in fetchOrders generator function');
    try {
        const res = yield axios.get('/api/orders')
        console.log('Get all orders', res.data);
        yield put({
            type: 'SET_ORDERS',
            payload: res.data
        })
    }
    catch (error) {
        console.log('GET orders request failed', error);
    }
}

// Watcher function for 'DELETE_ITEM' dipatch and function
function* adminSaga() {
    yield takeEvery('DELETE_ITEM', deleteInventoryItem),
        yield takeEvery('FETCH_CAKES', fetchOrders),
        yield takeEvery('DELETE_ORDER_ITEM', deleteOrderItem)
}

export default adminSaga;