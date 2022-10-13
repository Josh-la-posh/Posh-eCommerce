import * as ActionTypes from './ActionTypes'
import { PRODUCTS } from "../files/products";

export const setSearch = (text) => ({
    type: ActionTypes.SEARCHFIELD,
    payload: text
});

export const checkProduct = (item) => ({
    type: ActionTypes.PRODUCTITEM,
    payload: item
});

export const fetchProduct = () => (dispatch) => {
    dispatch(productLoading(true));

    setTimeout(() => {
        dispatch(addProduct(PRODUCTS))
    }, 2000);
}

export const productLoading = () => ({
    type: ActionTypes.PRODUCTLOADING
})

export const productFailed = (errMess) => ({
    type: ActionTypes.PRODUCTFAILED,
    payload: errMess
});

export const addProduct = (product) => ({
    type: ActionTypes.ADDPRODUCT,
    payload: product
});

export const addToCart = (product) => async dispatch => {

    const cart = localStorage.getItem('cart') 
                ? JSON.parse(localStorage.getItem('cart')) 
                : [];

    cart.forEach(cartItem => {

        if (cartItem.id === product.id) {
            cartItem.quantity = cartItem.quantity + 1;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        
    });

    const existingItem = cart.filter(cartItem => cartItem.id === product.id);

    if (existingItem.length === 0) {
        const newItem = ({...product, quantity: 1});
        cart.push(newItem);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
     

    dispatch({
        type: ActionTypes.ADDTOCART,
        payload: cart
    })    
};

export const reduceCart = (product) => async dispatch => {

    const cart = localStorage.getItem('cart') 
                ? JSON.parse(localStorage.getItem('cart')) 
                : [];

    cart.forEach(cartItem => {

        if (cartItem.id === product.id && cartItem.quantity) {
            cartItem.quantity = cartItem.quantity - 1;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        
    });



    const existingItem = cart.findIndex(cartItem => {
        return cartItem.id === product.id
    })

    if (cart[existingItem].quantity === 0 ) {
        cart.splice(existingItem, 1)
        localStorage.setItem('cart', JSON.stringify(cart));
    } 

    dispatch({
        type: ActionTypes.REDUCECART,
        payload: cart
    })    
}

export const removeFromCart = (product) => async dispatch => {

    const cart = localStorage.getItem('cart') 
                ? JSON.parse(localStorage.getItem('cart')) 
                : [];

    const index = cart.findIndex(cartItem => {
        return cartItem.id === product.id
    })

    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart));

    dispatch({
        type: ActionTypes.REMOVEFROMCART,
        payload: {
            product,
            cart
        }
    })
}