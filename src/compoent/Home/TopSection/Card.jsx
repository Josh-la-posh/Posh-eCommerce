import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    state = {  } 
    render() { 
        return (
            <section className="mid-display">
                <div className="mid-display-content row">
                    <div className="no-card col-lg-5 col-md-12">
                        <h3>Create A Shopping List</h3>
                        <p>Make a list of items you love to purchase</p>
                        <button>Create List</button>
                    </div>
                    <div className="yes-card col-lg-7 col-md-12">

                        <div className="card">
                            <div className="card-title">Easy Return</div>
                            <div className="card-body">
                                <div className="card-body-image">
                                    <img src="../../images/product/wallet.jpg" alt="" />
                                </div>
                                <div className="card-body-image">
                                    <img src="../../images/product/wallet.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">Home living</div>
                            <div className="card-body">
                                <div className="card-body-image">
                                    <img src="../../images/product/wallet.jpg" alt="" />
                                </div>
                                <div className="card-body-image">
                                    <img src="../../images/product/wallet.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-title">Featured Products</div>
                            <div className="card-body">
                                <div className="card-body-image">
                                    <img src="../../images/product/wallet.jpg" alt="" />
                                </div>
                                <div className="card-body-image">
                                    <img src="../../images/product/wallet.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
 
export default Card;