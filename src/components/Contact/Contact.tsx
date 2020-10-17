import React from 'react'

import './Contact.scss'

import contactbanner from '../../assets/images/contact-banner.jpg'

export const Contact = () => {
    return (
        <div className="container">
            <div className="contact">
                <div className="contact__thumb">
                    <img src={contactbanner} alt="" />
                </div>
                <div className="contact__content">
                    <h4>Subscribe to our newsletter and
                        receive exclusive offers every week</h4>
                    <input type="text" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>
        </div>
    )
}
