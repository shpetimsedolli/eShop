import React from 'react'
import { Link } from "react-router-dom";

import './ProductBox.scss'

import empty from '../../assets/images/empty.jpg'

export interface Props {
    id: string;
    title: string;
    price: string;
    image: string;
    isBig?: boolean;
}

export const ProductBox = (props: Props) => {
    return (
        <div className={`ProductBox ${props.isBig ? 'ProductBox--big' : 'ProductBox--small'}`}>
            <Link className="link" to={`/product/${props.id}`}>
                <div className="ProductBox__thumb">
                    <img src={props.image ? props.image : empty} alt={props.title} />
                </div>
                <div className="ProductBox__content">
                    <h4>{props.title}</h4>
                    <span>{props.price}</span>
                </div>
            </Link>
        </div>
    )
}