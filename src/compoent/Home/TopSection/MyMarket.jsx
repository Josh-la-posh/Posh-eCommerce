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
                        <li><FontAwesomeIcon className='left-content-icon' icon='mobile' /><a href="/home">Phones & Tablets</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='car-side' /><a href="/home">Electronics</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='shirt' /><a href="/home">Fashion</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='gamepad' /><a href="/home">Gaming</a></li><br />
                        <li><FontAwesomeIcon className='left-content-icon' icon='ellipsis' /><a href="/home">Other categories</a></li><br />

                    </ul>
                </div>
                <div className="main-content col-lg-10">  
                    <Carousel autoPlay interval="5000" transitionTime="1000" infiniteLoop>
                        <div>
                            <img src="../../images/carousel_images/images.jpeg" alt="" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="../../images/carousel_images/images-1.jpeg" alt="" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="../../images/carousel_images/images-2.jpeg" alt="" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="../../images/carousel_images/images-3.jpeg" alt="" className='img-fluid'/>
                        </div>
                        <div>
                            <img src="../../images/carousel_images/images-4.jpeg" alt="" className='img-fluid'/>
                        </div>
                    </Carousel>
                </div>
            </section>
        );
    }
}
 
export default MyMarket;