import {combineReducers} from 'redux'
import { FavouriteMovieDetailsReducer } from './favoriteMovieDetailsReducer'
import { FavouriteReducer } from './favouriteReducer'
// import { addFavouriteReducer } from './addFavouriteReducer'
import { loginReducer } from './loginReducer'
import { MovieDetailsReducer } from './movieDetailsReducer'
import { MovieData } from './movieReducer'
import { signupReducer } from './signupReducer'
import { userFavouriteReducer } from './userFavouriteReducer'



const rootReducer = combineReducers({
    fetchMovie: MovieData,
    movieDetails: MovieDetailsReducer,
    signup: signupReducer,
    login: loginReducer,
    showFavMovie: userFavouriteReducer,
    addFavourite: FavouriteReducer,
    favouriteMovieDetail : FavouriteMovieDetailsReducer
    
})

export default rootReducer