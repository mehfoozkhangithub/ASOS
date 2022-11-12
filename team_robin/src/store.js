import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./ProductsStore/products.reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer"
import {reducer as ProductReducer} from "./ProductReducer/reducer"
const rootReducer = combineReducers({
    products:productsReducer,
    Auth:AuthReducer,
    Prod:ProductReducer,
})

export const store = legacy_createStore( rootReducer, applyMiddleware(thunk));

