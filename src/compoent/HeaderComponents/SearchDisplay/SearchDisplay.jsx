import React, { Component } from 'react';
import './SearchDisplay.css';

class SearchDisplay extends Component {
    state = {  } 
    render() { 
        const {FilterSearch, search} = this.props
        return (
            <div>
                {search &&
                <div className="search-display">
                    <ul>
                        {search && FilterSearch.map(item => {
                            return (
                                <li key={item.id}><a href="/">{item.name} {item.model}</a></li>
                            )
                        })}
                    </ul>
                </div>}
            </div>
        );
    }
}
 
export default SearchDisplay;