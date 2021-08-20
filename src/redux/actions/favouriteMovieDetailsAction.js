import  {FAVOURITEMOVIE_DETAILS_SUCCESS, FAVOURITEMOVIE_DETAILS_FAILURE, FAVOURITEMOVIE_DETAILS_REQUEST} from './actionType.js'

import axios from 'axios'

const  favouriteMovieDetailsRequest = () => ({
    type: FAVOURITEMOVIE_DETAILS_REQUEST
})

const  favouriteMovieDetailsSuccess = (data) => ({
    type: FAVOURITEMOVIE_DETAILS_SUCCESS,
    payload: data
    
})

const  favouriteMovieDetailsFailure = (error) => ({
    type: FAVOURITEMOVIE_DETAILS_FAILURE,
    payload: error
})


const  favouriteMovieDetailsAsync = (id) => async (dispatch) => {
    try{
        dispatch( favouriteMovieDetailsRequest())
        const response = await axios.get(`https://wootlab-moviedb.herokuapp.com/api/movie/favorite/detail/${id}`)
        // console.log(response)
        dispatch( favouriteMovieDetailsSuccess(response.data))

    }catch(error){
        dispatch(favouriteMovieDetailsFailure(error.response))
    }
}

export default  favouriteMovieDetailsAsync