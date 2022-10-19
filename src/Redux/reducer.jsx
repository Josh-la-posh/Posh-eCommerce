import * as ActionTypes from './ActionTypes';
import { PRODUCTS } from "../files/products";

const initialState = {
    search: '',
    items: PRODUCTS,
}
export const Reducer = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.SEARCHFIELD:
            return {
                ...state,
                search: action.payload
            };        
        default:
            return state
    }
}