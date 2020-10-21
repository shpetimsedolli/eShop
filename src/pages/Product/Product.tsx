import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from "react-router-dom";
import * as API from './../../api/api';
import './Product.scss';

interface Props extends RouteComponentProps { }

interface StateProps {
    loading: boolean;
    food?: API.Hints[],
    error?: string;
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
                {state.food?.map((food: API.Hints) => {
                    return (
                        <div className="row has_gutter">
                            <div className="column-6">
                                <img src={food.food.image} alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
