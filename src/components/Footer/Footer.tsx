import React from 'react'

//styles
import './Footer.scss'

import footerlogo from '../../assets/images/footer-logo.svg'
import fb from '../../assets/images/fb-icon.svg'
import twitter from '../../assets/images/twitter-logo.svg'
import li from '../../assets/images/linkedin-logo.svg'
import insta from '../../assets/images/instagram-logo.svg'
import you from '../../assets/images/yot-icon.svg'

export const Footer = () => {
    return (
        <div className="Footer">
            <div className="container">
                <div className="Footer_wrap">
                    <div className="Footer__first">
                        <img src={footerlogo} alt="" />
                        <p>House My Brand designs clothing for the young, the old &
                        everyone in between – but most importantly, for the fashionable</p>
                        <div className="Footer__icons">
                            <img src={fb} alt="" />
                            <img src={twitter} alt="" />
                            <img src={li} alt="" />
                            <img src={insta} alt="" />
                            <img src={you} alt="" />
                        </div>
                    </div>
                    <ul>
                        <h3>Shopping Online</h3>
                        <li>Order Status</li>
                        <li>Shipping and Delivery</li>
                        <li>Returns</li>
                        <li>Payment Options</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <h3>Information</h3>
                        <li>Gift Cards</li>
                        <li>Find a store</li>
                        <li>NewsLetter</li>
                        <li>Become a member</li>
                        <li>Site Feedback</li>
                    </ul>
                    <ul>
                        <h3>Contact</h3>
                        <li>store@uikit.com</li>
                        <li>Hotline: 585158</li>
                    </ul>
                </div>
            </div>
            <h5>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</h5>
        </div>
    )
}

