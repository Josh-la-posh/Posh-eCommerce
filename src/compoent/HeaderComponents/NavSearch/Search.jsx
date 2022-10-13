import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavSearch.css';

function Search({onSearch}) {
        
        return (
            
            <form className="search">
                <div className="search-content">
                    <div className="input">
                        <input type="text"
                                placeholder="Search products, brands adn categories"
                                onChange={onSearch}
                                />
                        <span className='icon'><FontAwesomeIcon icon='magnifying-glass' /></span>


                    </div>                    
                </div>
            </form>
        );

}
 
export default Search;