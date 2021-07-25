import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <span className="footer__twitter">Twitter</span>
            <span className="footer__copyright">©2021 - All rights reserved</span>
            {/* <Link to="/support" className="footer__support">Support</Link> */}
        </div>
    );
}

export default Footer;