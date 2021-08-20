import  {FAVOURITE_SUCCESS, FAVOURITE_FAILURE, FAVOURITE_REQUEST} from './actionType.js'

import axios from 'axios'

const showFavouriteRequest = () => ({
    type: FAVOURITE_REQUEST
})

const showFavouriteSuccess = (data) => ({
    type: FAVOURITE_SUCCESS,
    payload: data
    
})

const showFavouriteFailure = (error) => ({
    type: FAVOURITE_FAILURE,
    payload: error
})


const showFavouriteAsync = (id) => async (dispatch) => {
    try{
        dispatch(showFavouriteRequest(id))
        const response = await axios.get(`https://wootlab-moviedb.herokuapp.com/api/movie/favorites/${id}`)
        dispatch(showFavouriteSuccess(response.data))

    }catch(error){
        dispatch(showFavouriteFailure(error.response))
    }
}

export default showFavouriteAsync