import React, { Component } from 'react';
import MyMarket from './MyMarket';
import Blockbuster from './Blockbuster';
import Card from './Card';
import FlashSales from './FlashSales';
import PhoneAndTablet from '../../MyMarket/Phone&Tablet';

class TopSection extends Component {
    state = {  } 
    render() { 
        return (
            <div className="top-section">
                <div className="container">

                    <MyMarket />
                    <Blockbuster />
                    <Card />
                    <FlashSales />
                </div>

            </div>
        );
    }
}
 
export default TopSection;