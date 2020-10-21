import React from 'react'
import { HomeButton } from '../../components/HomeButton/HomeButton'

//styles
import './ErrorPage.scss'

export const ErrorPage = () => {
    return (
        <div className="ErrorPage">
            <HomeButton />
            <h1>Nothing found <b>404</b>!</h1>
        </div>
    )
}
