import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MyMarket.css';

class MyMarket extends Component {
    state = {  } 
    render() { 
        return (
            <section className="carousel row">
                <div className="left-content col-3">
                    <ul>
                        <li><a href="/home">Health & Beauty</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='mobile' /><a href="/home">Phones & Tablets</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='laptop' /><a href="/home">Computing</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='car-side' /><a href="/home">Electronics</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='shirt' /><a href="/home">Fashion</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='gamepad' /><a href="/home">Gaming</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='volleyball' /><a href="/home">Sporting Goods</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='ellipsis' /><a href="/home">Other categories</a></li><br />

                    </ul>
                </div>
                <div className="main-content col-9">

                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <div data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label='Slide-1'></div>
                            <div data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label='Slide-2'></div>
                            <div data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label='Slide-3'></div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img className="d-block w-100" src="../../images/product/fogg.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="../../images/product/nivea.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                            <img className="d-block w-100" src="..." alt="Third slide" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" data-bs-target="#carouselExampleIndicators" type='button' data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" data-bs-target="#carouselExampleIndicators" type='button' data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually hidden">Next</span>
                        </button>
                    </div>

                </div>
                {/* <div className="right-content col-lg-3">
                    <div className="top-box">
                        <div className="content">
                            TOP BOX
                        </div>
                    </div>
                    <div className="bottom-box">
                        <div className="content">
                            BOTTOM BOX
                        </div>
                    </div>
                </div> */}
            </section>
        );
    }
}
 
export default MyMarket;