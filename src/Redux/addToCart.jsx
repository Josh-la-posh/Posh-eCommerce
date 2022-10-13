import * as ActionTypes from './ActionTypes';

const initialState = {
    cart: [],
    totalQuantity: 0
}

if (localStorage.getItem('cart')) {
    initialState.cart = JSON.parse(localStorage.getItem('cart'))
} else {
    initialState.cart = [];
}

if (localStorage.getItem('Total Quantity')) {
    initialState.totalQuantity = JSON.parse(localStorage.getItem('Total Quantity'))
} else {
    initialState.totalQuantity = 0;
}

export const Cart = (state=initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADDTOCART:
            return addToCart(state,action)
        case ActionTypes.REDUCECART:
            return reduceCart(state,action)
        case ActionTypes.REMOVEFROMCART:
            return removeFromCart(state,action)
        default:
            return state;
    }
}

const addToCart = (state, action) => {
     const cart = [...action.payload];
     const totalQuantity = state.totalQuantity + 1;
     localStorage.setItem('Total Quantity', JSON.parse(totalQuantity))

    return {
        ...state,
        totalQuantity,
        cart,

    }

}

const reduceCart = (state, action) => {
    const cart = [...action.payload];
    const totalQuantity = state.totalQuantity && state.totalQuantity - 1;
    localStorage.setItem('Total Quantity', JSON.parse(totalQuantity))

   return {
       ...state,
       totalQuantity,
       cart,

   }

}

const removeFromCart = (state, action) => {
    const cart = [...action.payload.cart];
    const totalQuantity = state.totalQuantity - action.payload.product.quantity
    localStorage.setItem('Total Quantity', JSON.parse(totalQuantity))
    
   return {
       ...state,
       totalQuantity,
       cart,

   }

}