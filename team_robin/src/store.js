import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./ProductsStore/products.reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer"
import {reducer as ProductReducer} from "./ProductReducer/reducer"
import { cartReducer } from "./cart_auth/cart_reducer";
const rootReducer = combineReducers({
    products:productsReducer,
    Auth:AuthReducer,
    Prod:ProductReducer,
    cartInfo:cartReducer
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));

