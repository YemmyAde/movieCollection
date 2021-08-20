import { ADD_FAVOURITE, REMOVE_FAVOURITE} from './actionType.js'
import axios from 'axios'


const addFavourite = (movie) => ({
    type: ADD_FAVOURITE,
    payload: movie
    
})

const removeFavourite= (movie) => ({
    type: REMOVE_FAVOURITE,
    payload: movie
})

const AddFavouriteFunction = (movie) => async (dispatch) => {
    try{
        const response = await axios.post(`https://wootlab-moviedb.herokuapp.com/api/movie/favorite/add`, movie)
        dispatch(addFavourite(response.data))
        
    }catch(error){
        dispatch(addFavourite(error.response))
    }
}
const RemoveFavouriteFunction = (movie) => async (dispatch) => {
    try{
        const response = await axios.put(`https://wootlab-moviedb.herokuapp.com/api/movie/favorite/remove`, movie)
        dispatch(removeFavourite(response.data))
        
    }catch(error){
        dispatch(removeFavourite(error.response))
    }
}
export {AddFavouriteFunction, RemoveFavouriteFunction}