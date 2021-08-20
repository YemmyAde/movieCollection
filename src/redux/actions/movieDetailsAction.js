import  {MOVIE_DETAILS_SUCCESS, MOVIE_DETAILS_FAILURE, MOVIE_DETAILS_REQUEST} from './actionType.js'

import axios from 'axios'

const movieDetailsRequest = () => ({
    type: MOVIE_DETAILS_REQUEST
})

const movieDetailsSuccess = (data) => ({
    type: MOVIE_DETAILS_SUCCESS,
    payload: data
    
})

const movieDetailsFailure = (error) => ({
    type: MOVIE_DETAILS_FAILURE,
    payload: error
})


const movieDetailsAsync = (id) => async (dispatch) => {
    try{
        dispatch(movieDetailsRequest())
        const response = await axios.get(`https://wootlab-moviedb.herokuapp.com/api/movie/detail/${id}`)
        // console.log(response)
        dispatch(movieDetailsSuccess(response.data))

    }catch(error){
        dispatch(movieDetailsFailure(error.response))
    }
}

export default movieDetailsAsync