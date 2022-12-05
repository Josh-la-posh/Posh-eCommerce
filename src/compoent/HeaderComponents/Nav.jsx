import React from 'react';
import { Navbar } from 'reactstrap';
import Logo from './NavLeft/Logo';
import NavRight from './NavRight/NavRight';
import NavSearch from './NavSearch/NavSearch';

function Nav({ onSearch }) {
    return (
        <Navbar expand='md' light id='nav'>
                <div id="header-nav">
                    <Logo />
                    <NavSearch onSearch={onSearch} />
                    <NavRight />
                </div>
            </Navbar>
    )
}

export default Nav;