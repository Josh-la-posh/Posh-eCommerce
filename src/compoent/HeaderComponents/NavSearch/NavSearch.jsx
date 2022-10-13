import React from 'react';
import './NavSearch.css';
import Search from './Search';

function NavSearch({onSearch}) {
        return (
            <div className="nav-search">
                <Search onSearch={onSearch} />
            </div>
        );

}
 
export default NavSearch;