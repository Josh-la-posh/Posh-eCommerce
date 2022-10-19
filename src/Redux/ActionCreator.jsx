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

// FETCH ITEMS

export const fetchProduct = () => (dispatch) => {
    dispatch(productLoading(true));

    setTimeout(() => {
        dispatch(addProduct(PRODUCTS))
    }, 2000);
};

export const productLoading = () => ({
    type: ActionTypes.PRODUCTLOADING
})

export const productFailed = (errMess) => ({
    type: ActionTypes.PRODUCTFAILED,
    payload: errMess
});

//ADD ITEMS TO CART

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
        payload: {
            cart,
            product
        }
    })    
};

//REDUCE ITEMS

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
        payload: {
            cart,
            product
        }
    })    
};

// REMOVE ITEMS FROM CART

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
};

//SHOPPING LIST

export const listItem = (text) => ({
    type: ActionTypes.LISTITEM,
    payload: text
})

export const addToShoppingList = (text) => async dispatch => {
    const shoppingList = localStorage.getItem('List')
                        ? JSON.parse(localStorage.getItem('List'))
                        : [];


    dispatch({
        type: ActionTypes.ADDTOSHOPPINGLIST,
        payload: {
            shoppingList,
            text,
        }
    })
};