import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from "react-router-dom";
import Slider from "react-slick";
import * as API from './../../api/api';

//Components
import { Contact } from '../../components/Contact/Contact';
import { ProductBox } from '../../components/ProductBox/ProductBox';

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
const settingsFavorite = {
    dots: false,
    nav: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4
};
export interface StateProps {
    loading: boolean;
    food?: API.Hints[],
    error?: string;
}

export const Home = () => {

    const [state, setState] = useState<StateProps>({
        loading: true,
        food: [],
        error: undefined
    })

    useEffect(() => {
        loadFood();
    }, [])

    const loadFood = async () => {
        try {
            const res = await API.getFood()
            setState({
                ...state,
                loading: false,
                food: res.data?.hints
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                error: error.message
            })
        }
    }
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
                                <h2>You can cook this, if u try atleast</h2>
                            </div>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner3} alt="banner1" />
                        <div className="banner__content">
                            <div className="container">
                                <h2>Fruit is the seed-bearing structure in flowering plants</h2>
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
            <section className="block_section favorite_section">
                <div className="container">
                    <div className="main_title">
                        <h3>Your Favorite</h3>
                    </div>
                    <div className="row has_gutter">
                        {
                            state.food?.map((foodItem: API.Hints) => {
                                return (
                                    <div className="column-3" key={foodItem.food.foodId}>
                                        <ProductBox
                                            id={foodItem.food.foodId}
                                            title={foodItem.food.label}
                                            price={foodItem.food.category}
                                            image={foodItem.food.image}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}