import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer";

const middleware = [thunk];

let idFromLocalStorage = localStorage.getItem("id")
  ? localStorage.getItem("id")
  : '';


const initialState = {
    fetchMovie: {
      data: {
        content: []
      },
      isLoading:false,
      error: {}
  },
  movieDetails:{
    data: {
      videos:[]
    },
    isLoading:false,
    error: {}
  },
  favouriteMovieDetail:{
    data: {
      videos:[]
    },
    isLoading:false,
    error: {}
  },
  signup:{
    data: {},
    isLoading:false,
    error: {}
  },
  login:{
    data: {
      id: idFromLocalStorage
    },
    isLoading:false,
    error: {}
  },
  addFavourite:{
    movieList: []
  },
  showFavMovie:{
    data: {},
    isLoading:false,
    error: {}
  }
}
const store = createStore(
  rootReducer, initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
