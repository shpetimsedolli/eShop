import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from "react-router-dom";
import * as API from './../../api/api';

import './Product.scss';

import empty from '../../assets/images/empty.jpg';

interface Props extends RouteComponentProps { }

interface StateProps {
    loading: boolean;
    food?: API.Hints[],
    error?: string;
}
interface Props {
    id: string;
    title: string;
    price: string;
    image: string;
    isBig?: boolean;
}
export const Product = (props: Props) => {
    const [state, setState] = useState<StateProps>({
        loading: true,
        food: undefined,
        error: undefined
    });
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
    console.log("food", state.food);
    return (
        <div className="Product">
            <div className="container">
                {state.food?.slice(0, 1).map((food: API.Hints) => {
                    return (
                        <div className={`Product ${props.isBig ? 'Product--big' : 'Product--small'}`}>
                            <div className="Product__thumb">
                                <img src={food.food.image ? food.food.image : empty} alt={food.food.foodId} />
                            </div>
                            <div className="Product__content">
                                <h4>{food.food.foodId}</h4>
                                <span>{food.food.categoryLabel}</span>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}
