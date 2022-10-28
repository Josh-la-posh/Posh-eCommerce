import React, { Component } from 'react';
import { PRODUCTS } from '../../../files/products';
import './BottomSection.css'
import { Link } from 'react-router-dom';

class BottomSection extends Component {
    state = {  } 
    render() { 
        return (
            <div className="bottom-section">

                <hr />

                <section className="viewed-content">
                    <h2>Customers who viewed items in your browsing history also viewed</h2>
                    
                    <div className="content-display-container">

                        <div className="content-display">
                            {PRODUCTS.map((product) => {
                                return(
                                    (product.product !== 'mobile') &&
                                    <Link to={`/product/${product.id}`} className="viewed-product" key={product.id}>
                                        <div className='product-img img-fluid'><img src={product.image} alt='' /></div>
                                        <p className='desc'>{product.name} {product.model}</p>
                                        {product.sale_type === 'Blockbuster' && <small className='deal'>Deal of the day</small>}
                                        <p className='amt'>#{product.price}</p>
                                        <p className="text">FREE Delivery over #4,999</p>
                                        <p className='text'>Fulfilled by PoshStore.</p>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>


                    <hr />
                </section>


                <div className="signUp-content">
                    <p>See personalized recommendations</p>
                    <button className="">Sign In</button>
                    <p>New customer? <span><a href="/home">Start here.</a></span></p>
                </div>

                <hr />
            </div>
        );
    }
}
 
export default BottomSection;