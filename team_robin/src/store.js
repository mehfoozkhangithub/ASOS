import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./ProductsStore/products.reducer";
import { cartReducer } from "./cart_auth/cart_reducer";
const rootReducer = combineReducers({
    products:productsReducer,
    cartInfo:cartReducer
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));
