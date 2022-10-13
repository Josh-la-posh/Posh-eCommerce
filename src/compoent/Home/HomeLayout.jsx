import React from 'react';
import TopSection from './TopSection/TopSection';
import BottomSection from './BottomSection/BottomSection';
import './HomeLayout.css';

function Home () {
    return(
        <div className="home-container">

            <TopSection />
            <BottomSection />

        </div>
    )
}

export default Home;
