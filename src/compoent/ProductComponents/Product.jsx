import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import { connect } from 'react-redux';
import { reduceCart, addToCart, fetchProduct } from '../../Redux/ActionCreator';

const mapStateToProps = (state) => ({
    product: state.product,
    quantity: state.reducer.quantity,
    cart: state.cart.cart
})

const mapDispatchToProps = (dispatch) => ({
    fetchProduct: () => {dispatch(fetchProduct())},
    addToCart: (item) => {dispatch(addToCart(item))},
    onDecrease: (item) => {dispatch(reduceCart(item))}
})

class Product extends Component {

    componentDidMount() {
        addToCart()
        fetchProduct()
        reduceCart()
    }

    render() {
        const {item} = this.props;
        const cartQuantity = this.props.cart.filter(cartItem => {
            return (
                cartItem.id === item.id
            )
        })[0]
        console.log(cartQuantity)

        return (
            <div className="product">
                <div className="container">
                    <div className="product-content">
                        <div className="img-display">
                            <div className="img-display-content">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="img-nothing-content"></div>
                        </div>

                        <div className="information display">
                            <div className="information-display-content">
                                <h2>{item.name} {item.model} {item.description} {item.memory && <>({item.memory}GB) - {item.color}</>}</h2>
                                <p>Brand: <a href="/home">{item.brand}</a> | <a href="/home">Similar Products from {item.brand}</a></p>

                                <hr />
                                
                                <h1>#{item.price}</h1>

                                {cartQuantity ?
                                <div className="cart-button">
                                    <button onClick={()=>{this.props.onDecrease(item)}} >-</button>
                                    <span>{cartQuantity.quantity}</span>
                                    <button onClick={()=>{this.props.addToCart(item)}} >+</button>
                                    <span>({cartQuantity.quantity} item(s) added)</span>
                                </div>
                                :
                                <button onClick={()=>{this.props.addToCart(item)}} className='addToCart'><FontAwesomeIcon className='icon' icon='cart-plus' />ADD TO CART</button>}

                                <div className="delivery">
                                    <div className="pay">
                                        <div className="">Icon</div>
                                        <p>Pay on Delivery</p>
                                    </div>
                                    <div className="pay">
                                        <div className="">Icon</div>
                                        <p>Free Delivery</p>
                                    </div>
                                    <div className="pay">
                                        <div className="">Icon</div>
                                        <p>7 Days Replacement</p>
                                    </div>
                                    <div className="pay">
                                        <div className="">Icon</div>
                                        <p>PoshStore Delivered</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="product-details">
                                    <div>Pattern name: <h6>{item.name} {item.model}</h6></div>
                                    {item.color && <div><h6>Colour:</h6>{item.color}</div>}
                                    {item.brand ? <div><h6>Brand:</h6> {item.brand}</div> : <div><h6>Brand:</h6> {item.name}</div>}
                                    {item.model && <div><h6>Model</h6>{item.name} {item.model}</div>}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Product);