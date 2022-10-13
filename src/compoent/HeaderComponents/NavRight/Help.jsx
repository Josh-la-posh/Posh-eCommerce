import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Help = () => {
    return (
        <a href='/' className="menu">
            <span className='icon icon-left'><FontAwesomeIcon icon='circle-question' /></span>
                Help
            <span className='icon'><FontAwesomeIcon icon='chevron-down' /></span>
        </a>
    )
}