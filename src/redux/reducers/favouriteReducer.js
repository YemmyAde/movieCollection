import {REMOVE_FAVOURITE, ADD_FAVOURITE} from '../actions/actionType.js'

const initialState = {
    movieList: []
}

export  const FavouriteReducer = (state=initialState, action) =>{
    const {type, payload} = action
    switch (type){
     case ADD_FAVOURITE:
         const movie = payload;
         const existMovie = state.movieList.find((item) =>  item.id === movie.id);

         if (existMovie){
             return {
                 ...state,
                 movieList: state.movieList.map((item) => item.id === existMovie.id ? movie : item )
             }
            }
             else{
                 return {
                     ...state,
                     movieList: [...state.movieList, movie]
                 }
             }
        case REMOVE_FAVOURITE:
            return{
                ...state,
                movieList: state.movieList.filter((item) => item.id !== movie.id),
            }
      
         default: return state
    }
}


