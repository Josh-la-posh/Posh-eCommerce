import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './HeaderLayout.css';
import {PRODUCTS} from '../../files/products';
import SearchDisplay from './SearchDisplay/SearchDisplay';
import Nav from './Nav';
import { setSearch } from '../../Redux/ActionCreator';

function HeaderLayout () {

    const search = useSelector((state) => state.reducer.search);

    const dispatch = useDispatch();
    const onSearch = (e) => {dispatch(setSearch(e.target.value))};

    const FilterSearch = PRODUCTS.filter((item) => {
        return item.name.toLowerCase().includes(search)
    });

    return(
        <React.Fragment>
            <div className="header">
                <Nav onSearch={onSearch}/>
                <SearchDisplay search={search}
                                FilterSearch={FilterSearch}/>
                
            </div>
        </React.Fragment>
    )
}

export default HeaderLayout;