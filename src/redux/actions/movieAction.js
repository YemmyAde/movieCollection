import  {MOVIE_DATA_SUCCESS, MOVIE_DATA_FAILURE, MOVIE_DATA_REQUEST} from './actionType.js'
import axios from 'axios'

const movieFetchRequest = () => ({
    type: MOVIE_DATA_REQUEST
})

const movieFetchSuccess = (data) => ({
    type: MOVIE_DATA_SUCCESS,
    payload: data
    
})

const movieFetchFailure = (error) => ({
    type: MOVIE_DATA_FAILURE,
    payload: error
})

const movieFetchAsync = (data) => async (dispatch) => {
    try{
        dispatch(movieFetchRequest())
        const response = await axios.get('https://wootlab-moviedb.herokuapp.com/api/movie/list/', data)
        // console.log(response)
        dispatch(movieFetchSuccess(response.data))

    }catch(error){
        dispatch(movieFetchFailure(error.response))
    }
}

export default movieFetchAsync