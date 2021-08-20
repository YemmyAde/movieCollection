import  {MOVIE_DATA_REQUEST, MOVIE_DATA_SUCCESS , MOVIE_DATA_FAILURE} from '../actions/actionType.js'

const initialState = {
    data: {},
    isLoading:false,
    error: {}
}

export const MovieData = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case MOVIE_DATA_REQUEST:
     return{
         ...state,
         isLoading: true,
     }
     case MOVIE_DATA_SUCCESS:
         return{
             ...state,
             isLoading: false,
             data: payload
         }
         case MOVIE_DATA_FAILURE:
         return{
            ...state,
             isLoading:false,
             error: payload,
         }
         default: return state
    }
}

