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
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Press Releases</a></li>
                            <li><a href="/">Our Science</a></li>
                        </ul>

                        <div className="empty"></div>

                        <ul className="meetUs">
                            <h3>Connect with Us</h3>
                            <li><a href="https://www.facebook.com/joshuaym">Facebook</a></li>
                            <li><a href="https://www.twitter.com/nova_jy">Twitter</a></li>
                            <li><a href="https://www.instagram.com/josh_la_posh">Instagram</a></li>
                            <li><a href="https://www.linkrdin.com/in/jfajobi">Linkdeln</a></li>
                        </ul>

                        <div className="empty"></div>

                        <ul className="makeMoney">
                            <h3>Make Money With Us</h3>
                            <li><a href="/">Sell on PoshStore</a></li>
                            <li><a href="/">PoshStore Global Selling</a></li>
                            <li><a href="/">Become an Affiliate</a></li>
                            <li><a href="/">Advertise Your Products</a></li>
                            <li><a href="/">PoshStore Pay on Merchants</a></li>
                        </ul>

                        <div className="empty"></div>
                        
                        <ul className="helpYou">
                            <h3>Let Us Help You</h3>
                            <li><a href="/">COVID-19 and PoshStore</a></li>
                            <li><a href="/">Your Account</a></li>
                            <li><a href="/">Returns Centre</a></li>
                            <li><a href="/">100% Purchase Protection</a></li>
                            <li><a href="/">PoshStore App Download</a></li>
                            <li><a href="/">Help</a></li>
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