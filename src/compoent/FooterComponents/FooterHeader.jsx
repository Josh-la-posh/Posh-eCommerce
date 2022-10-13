import React from 'react';
import './Footer.css';

function FooterHeader () {
    return(
        <div className="">
            <div className="backToTop">
                <a href="#nav">Back to top</a>
            </div>
            <div className="footer-container">
                <div className="footer-top-content">

                    <div className="footer-content">
                        <ul className="knowUs">
                            <h3>Get to Know Us</h3>
                            <li><a href="/home">About Us</a></li>
                            <li><a href="/home">Careers</a></li>
                            <li><a href="/home">Press Releases</a></li>
                            <li><a href="/home">Our Science</a></li>
                        </ul>

                        <div className="empty"></div>

                        <ul className="meetUs">
                            <h3>Connect with Us</h3>
                            <li><a target='_blank' href="https://www.facebook.com/joshuaym">Facebook</a></li>
                            <li><a target='_blank' href="https://www.twitter.com/nova_jy">Twitter</a></li>
                            <li><a target='_blank' href="https://www.instagram.com/josh_la_posh">Instagram</a></li>
                            <li><a target='_blank' href="https://www.linkrdin.com/in/jfajobi">Linkdeln</a></li>
                        </ul>

                        <div className="empty"></div>

                        <ul className="makeMoney">
                            <h3>Make Money With Us</h3>
                            <li><a href="/home">Sell on PoshStore</a></li>
                            <li><a href="/home">PoshStore Global Selling</a></li>
                            <li><a href="/home">Become an Affiliate</a></li>
                            <li><a href="/home">Advertise Your Products</a></li>
                            <li><a href="/home">PoshStore Pay on Merchants</a></li>
                        </ul>

                        <div className="empty"></div>
                        
                        <ul className="helpYou">
                            <h3>Let Us Help You</h3>
                            <li><a href="/home">COVID-19 and PoshStore</a></li>
                            <li><a href="/home">Your Account</a></li>
                            <li><a href="/home">Returns Centre</a></li>
                            <li><a href="/home">100% Purchase Protection</a></li>
                            <li><a href="/home">PoshStore App Download</a></li>
                            <li><a href="/home">Help</a></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="footer-footer">
                        <div className="top">
                            <h1>PoshStore</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterHeader;