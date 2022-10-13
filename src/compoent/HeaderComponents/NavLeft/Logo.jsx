import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './NavLeft.css';

class Logo extends Component {
    state = {  } 
    render() { 
        return (            
            <div>
                <h1 className="logo">
                    <a href="/">                        
                        POSH
                        <span className='icon'><FontAwesomeIcon icon='star' /></span>
                    </a>
                </h1>
            </div>
        );
    }
}
 
export default Logo;