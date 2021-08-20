import React from 'react'
import {withRouter} from 'react-router-dom'
import ShowFavouriteMovies from '../components/showFavouriteList'

const ShowFavouritepage = () => {
    return (
        <ShowFavouriteMovies />
    )
}

export default withRouter(ShowFavouritepage)
