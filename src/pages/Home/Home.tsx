import React from 'react'
import Slider from "react-slick";

//Components

//styles
import './Home.scss'

import banner1 from '../../assets/images/banner-1.jpg'
import banner2 from '../../assets/images/banner-2.jpg'
import banner3 from '../../assets/images/banner-3.jpg'

const settingsBanner = {
    dots: false,
    nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export const Home = () => {
    return (
        <div className="Home">
            <section className="block_section banner_section">
                <Slider {...settingsBanner}>
                    <div className="banner">
                        <img src={banner1} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Food Collection</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner2} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Sale of the spring collection</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner3} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Sale of the winter collection</h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        </div>
    )
}
