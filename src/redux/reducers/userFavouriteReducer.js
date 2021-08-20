import  {FAVOURITE_SUCCESS, FAVOURITE_FAILURE, FAVOURITE_REQUEST} from '../actions/actionType.js'

const initialState = {
    data: {},
    isLoading:false,
    error: {}
}

export const userFavouriteReducer = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case FAVOURITE_REQUEST:
     return{
         ...state,
         isLoading: true,
     }
     case FAVOURITE_SUCCESS:
         return{
             ...state,
             isLoading: false,
             data: payload
         }
         case FAVOURITE_FAILURE:
         return{
            ...state,
             isLoading:false,
             error: payload,
         }
         default: return state
    }
}

