import React, { Component } from 'react';
import MyMarket from './MyMarket';
import Blockbuster from './Blockbuster';
import Card from './Card';

class TopSection extends Component {
    state = {  } 
    render() { 
        return (
            <div className="top-section">
                <div className="container">

                    <MyMarket />
                    <Card />
                    <Blockbuster />
                </div>

            </div>
        );
    }
}
 
export default TopSection;