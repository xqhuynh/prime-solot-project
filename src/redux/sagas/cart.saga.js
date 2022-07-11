// import axios from 'axios';
// import { put, takeEvery } from 'redux-saga/effects';

// // Saga will listen for 'ADD_TO_CART' dispatch 
// function* addToCart(action) {
//     try {
//         const res = yield axios.post('/api/cart', action.payload)
//         yield put({
//             type: "SET_CART",
//             payload: res.data
//         })
//     }
//     catch (error) {
//         console.log('Cart post error', error);
//     }
// }

// function* cartSaga() {
//     yield takeEvery('ADD_TO_CART', addToCart)
// }

// export default cartSaga;