import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MyMarket.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class MyMarket extends Component {
    state = {  } 
    render() { 
        return (
            <section className="my-market row">
                <div className="left-content col-lg-2 col-3">
                    <ul>
                        <li><FontAwesomeIcon className='left-content-icon' icon='mobile' /><a href="/phone-tablet">Phones & Tablets</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='car-side' /><a href="/electronics">Electronics</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='shirt' /><a href="/fashion">Fashion</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='gamepad' /><a href="/gaming">Gaming</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='ellipsis' /><a href="/other">Other categories</a></li><br />

                    </ul>
                </div>
                <div className="main-content col-lg-10">  
                    <Carousel autoPlay interval="5000" transitionTime="1000" infiniteLoop>
                        <div>
                            <img src="../../images/carousel_images/carousel-1.png" alt="" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="../../images/carousel_images/carousel-2.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="../../images/carousel_images/carousel-3.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="../../images/carousel_images/carousel-4.jpg" alt="" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="../../images/carousel_images/carousel-5.jpg" alt="" className='img-fluid'/>
                        </div>
                    </Carousel>
                </div>
            </section>
        );
    }
}
 
export default MyMarket;