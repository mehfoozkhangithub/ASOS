import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./ProductsStore/products.reducer";
const rootReducer = combineReducers({
    products:productsReducer,
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));
