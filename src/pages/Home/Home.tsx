import React from 'react'
import Slider from "react-slick";

//Components
import { Contact } from '../../components/Contact/Contact';

//styles
import './Home.scss'

import banner1 from '../../assets/images/banner-1.jpg'
import banner2 from '../../assets/images/banner-2.jpg'
import banner3 from '../../assets/images/banner-3.jpg'
import arrival1 from '../../assets/images/arrival1.jpg'
import arrival2 from '../../assets/images/arrival2.jpg'



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
            <section className="block_section arrivals">
                <div className="container">
                    <div className="row has_gutter">
                        <div className="column-6">
                            <div className="box">
                                <div className="box__thumb">
                                    <img src={arrival1} alt="" />
                                </div>
                                <div className="box__content">
                                    <h3>New arrivals are now in!</h3>
                                    <button>Show Collection</button>
                                </div>
                            </div>
                        </div>
                        <div className="column-6">
                            <div className="box">
                                <div className="box__thumb">
                                    <img src={arrival2} alt="" />
                                </div>
                                <div className="box__content">
                                    <h3>Basic t-shirts $29,99</h3>
                                    <button>More Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </div >
    )
}
