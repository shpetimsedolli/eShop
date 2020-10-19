import React, { useState, useEffect } from 'react'
import * as API from './../../api/api';

import './Bio.scss'

import { AnotherHeader } from '../../components/AnotherHeader/AnotherHeader';
import { Footer } from '../../components/Footer/Footer';
import { Contact } from '../../components/Contact/Contact';
import { ProductBox } from '../../components/ProductBox/ProductBox';

export interface StateProps {
    loading: boolean;
    food?: API.Hints[],
    error?: string;
}


export const Bio = () => {
    const [state, setState] = useState<StateProps>({
        loading: true,
        food: [],
        error: undefined
    })

    useEffect(() => {
        loadFood();
    })

    const loadFood = async () => {
        try {
            const res = await API.getFood(

            )
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
        <div className="BioPage">
            <AnotherHeader />
            <section className="block_section kids">
                <div className="container">
                    <div className="kids__title">
                        <h3>Kids</h3>
                    </div>
                    <div className="row has_gutter">
                        {
                            state.food?.slice(0, 16).map((foodItem: API.Hints) => {
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
            <Contact />
            <Footer />
        </div>
    )
}
