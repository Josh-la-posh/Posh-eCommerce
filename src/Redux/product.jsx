import * as ActionTypes from './ActionTypes';

export const Product = (state={
        isLoading: true,
        errMess: null,
        product: []
    }, action) => {
        switch(action.type) {
            case ActionTypes.ADDPRODUCT:
                return {
                    ...state,
                    isLoading: false,
                    errMess: null,
                    product: action.payload
                };
            case ActionTypes.PRODUCTLOADING:
                return {
                    ...state,
                    isLoading: true,
                    errMess: null,
                    product: []
                };
            case ActionTypes.PRODUCTFAILED:
                return {
                    ...state,
                    isLoading: false,
                    errMess: action.payload,
                    product: []
                };
            default:
                return state;
        }
}