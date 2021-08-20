import  {FAVOURITEMOVIE_DETAILS_SUCCESS, FAVOURITEMOVIE_DETAILS_FAILURE, FAVOURITEMOVIE_DETAILS_REQUEST} from '../actions/actionType.js'

const initialState = {
    data: {},
    isLoading:false,
    error: {}
}

export const FavouriteMovieDetailsReducer = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case FAVOURITEMOVIE_DETAILS_REQUEST:
     return{
         ...state,
         isLoading: true,
     }
     case FAVOURITEMOVIE_DETAILS_SUCCESS:
         return{
             ...state,
             isLoading: false,
             data: payload
         }
         case FAVOURITEMOVIE_DETAILS_FAILURE:
         return{
            ...state,
             isLoading:false,
             error: payload,
         }
         default: return state
    }
}

