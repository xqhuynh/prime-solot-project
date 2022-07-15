import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import cakes from './cakes.reducer';
import cakeDetail from './cakeDetail.reducer';
import cart from './cart.reducer';
import orders from './orders.reducer';
// import editCake from './edit.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  cakes, // contains cakes db
  cakeDetail,  // contains active cake for cake detail view
  cart,  // contain active cake in cart
  orders, // contains all orders
  // editCake // contains edited cake item
});

export default rootReducer;
