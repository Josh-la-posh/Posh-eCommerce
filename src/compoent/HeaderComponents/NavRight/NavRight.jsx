import React, { Component } from 'react';
import './NavRight.css';
import { Account } from './Account';
import { Help } from './Help';
import { Cart } from './Cart';

class NavRight extends Component {
    state = {  } 
    render() { 
        return (
            <div className="nav-right">
                <Account />
                <Help />
                <Cart />
            </div>
        );
    }
}
 
export default NavRight;