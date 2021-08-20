import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE} from './actionType.js'
import axios from 'axios'

const loginRequest = () => ({
    type: USER_LOGIN_REQUEST
})

const loginSuccess = (data) => ({
    type: USER_LOGIN_SUCCESS,
    payload: data
    
})

const loginFailure = (error) => ({
    type: USER_LOGIN_FAILURE,
    payload: error
})


const loginAsync = (data) => async (dispatch) => {
    try{
        dispatch(loginRequest())
        const response = await axios.post(`https://wootlab-moviedb.herokuapp.com/api/user/login`, data)
        localStorage.setItem('id', response.data.id)
        dispatch(loginSuccess(response.data))
        
    }catch(error){
        dispatch(loginFailure(error.response))
    }
}

export default loginAsync