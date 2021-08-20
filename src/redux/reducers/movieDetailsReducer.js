import  {MOVIE_DETAILS_SUCCESS, MOVIE_DETAILS_FAILURE, MOVIE_DETAILS_REQUEST} from '../actions/actionType.js'

const initialState = {
    data: {},
    isLoading:false,
    error: {}
}

export const MovieDetailsReducer = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case MOVIE_DETAILS_REQUEST:
     return{
         ...state,
         isLoading: true,
     }
     case MOVIE_DETAILS_SUCCESS:
         return{
             ...state,
             isLoading: false,
             data: payload
         }
         case MOVIE_DETAILS_FAILURE:
         return{
            ...state,
             isLoading:false,
             error: payload,
         }
         default: return state
    }
}

