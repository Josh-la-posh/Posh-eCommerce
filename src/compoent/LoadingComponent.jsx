import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <span><FontAwesomeIcon icon="spinner" className="fa fa-pulse fa-3x fa-fw text-primary" /></span>
                    <p>Loading . . .</p>
                </div>
            </div>
        </div>
    )
}