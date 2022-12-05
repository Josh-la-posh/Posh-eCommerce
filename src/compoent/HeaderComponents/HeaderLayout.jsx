import React from 'react';
import './HeaderLayout.css';
import { setSearch } from '../../Redux/ActionCreator';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './Nav';

function HeaderLayout () {
    const dispatch = useDispatch();
    const onSearch = (e) => {dispatch(setSearch(e.target.value))};
    

    return(
        <React.Fragment>
            <div className="header">
                <Nav onSearch={onSearch}/>
                
                
            </div>
        </React.Fragment>
    )
}

export default HeaderLayout;