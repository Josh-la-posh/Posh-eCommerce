import React, { Component } from 'react';
import './NavRight.css';
import { Account } from './Account';
import { Cart } from './Cart';

class NavRight extends Component {
    state = {  } 
    render() { 
        return (
            <div className="nav-right">
                <Account />
                <Cart />
            </div>
        );
    }
}
 
export default NavRight;