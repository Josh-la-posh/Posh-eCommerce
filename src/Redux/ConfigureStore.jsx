import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Reducer } from "./reducer";
import { Product } from "./product";
import { Cart } from "./addToCart";
import { List } from "./addToList";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducer: Reducer,
            product: Product,
            cart: Cart,
            list: List
        }),
        applyMiddleware(thunk, logger)
        );

        return store;
}