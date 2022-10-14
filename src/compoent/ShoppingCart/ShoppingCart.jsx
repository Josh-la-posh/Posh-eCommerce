import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, reduceCart } from '../../Redux/ActionCreator';
import './ShoppingCart.css';
import BottomSection from '../Home/BottomSection/BottomSection';

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    totalItem: state.cart.totalQuantity,
    subTotal: state.cart.subTotal
});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => {dispatch(addToCart(item))},
    reduceCart: (item) => {dispatch(reduceCart(item))},
    removeFromCart: (item) => {dispatch(removeFromCart(item))},
})

class ShoppingCart extends Component {

    componentDidMount() {
        addToCart();
        reduceCart();
        removeFromCart();
    }

    render() {
        const {cart, totalItem, addToCart, removeFromCart, reduceCart, subTotal} = this.props;

        if (cart.length) {
            return(
                <div className="shopping-cart">
                    <div className="shopping-cart__content">
                        <div className="cart-left">
                            <h3>Shopping Cart</h3>
                            <p className="text-right">Price</p>
                                                
                            <hr />

                            {cart.map(item => {
                                return (
                                    <div className="cart-left-content" key={item.id}>
                                        <div className="cart-left-items">
                                            <div className="item-img"><img className='img-fluid' src={item.image} alt="Logo" /></div>
                                            <div className="item-details">
                                                <div className="name">{item.name} {item.model} - {item.color}</div>
                                                <h4>#{item.price}</h4>
                                                <h6>POSH <span>EXPRESS</span></h6>
                                                <p>Posh Express item in your order will be delivered for free (Lagos, Abuja and Anambra only excluding large items)</p>
                                            </div>
                                        </div>
                                        <div className="cart-account">

                                            <div className="button">
                                                <div className="remove">
                                                    <button onClick={()=>{window.confirm('Do you really want to remove this item from cart?') &&  removeFromCart(item)}}><span><FontAwesomeIcon icon='trash' /></span>Remove</button>
                                                </div>                                        
                                                <div className="cart-button">
                                                    <button onClick={()=>{reduceCart(item)}} >-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={()=>{addToCart(item)}} >+</button>
                                                </div>
                                            </div>
                                            <hr />                                            
                                        </div>
                                    </div>                        
                                )
                            })}
                            <div className="text-right">Subtotal ({totalItem} item): <p className='price'><strong>#{subTotal}</strong></p></div>
                            <div className="free-div"></div>
                        </div>

                        <div className="cart-right"></div>
                    </div>
                    <BottomSection />
                </div>
            )
        } else {
            return (
                <div className="shopping-cart">
                    <div className="empty-cart">
                        <h3>Your Posh cart is empty.</h3>
                        <p>Browse our categories and discover our best deals!</p>
                        <a href='/home'><button>START SHOPPING</button></a>
                    </div>
                    <BottomSection />
                    
                </div>
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);