import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from "react-router-dom";
import * as API from './../../api/api';
import './Product.scss';

interface Props extends RouteComponentProps { }

interface ParamsProps {
    id?: number
}

interface StateProps {
    loading: boolean;
    food?: API.Hints[],
    error?: string;
}

export const Product = (props: Props) => {
    const { id }: ParamsProps = props?.match?.params

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
            if (!id) {
                return;
            }
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
    console.log("food", state.food)
    return (
        <div className="Product">
            <div className="container">
                <div className="row has_gutter">
                    <div className="column-6">

                    </div>
                </div>
            </div>
        </div>
    )
}
