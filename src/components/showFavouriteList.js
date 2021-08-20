import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loader from '../images/loader.gif'
import Header from "./header";
import showFavouriteAsync from "../redux/actions/userFavouriteAction";
import { RemoveFavouriteFunction } from "../redux/actions/FavouriteAction";
import movieFetchAsync from "../redux/actions/movieAction";


const ShowFavouriteMovies = ({}) => {
        const { id } = useParams();
        const dispatch = useDispatch();

      const state = useSelector((state) => state);
      const moviesDisplay = state.showFavMovie.data
      const moviesDisplayArray = Object.entries(moviesDisplay);
      movieFetchAsync()
       React.useEffect(() => {
        // if (id && id !== "") {
      
        // }
        dispatch(showFavouriteAsync(id));
        }, [dispatch]);

        let posterImg
        let movieId
        moviesDisplayArray.map((item) => {
           posterImg = item[1].backdropPath;
           movieId = item[1].id;
          console.log(movieId)
        })

      const { data} = state.movieDetails;
      console.log(movieId)
      const userId = state.login.data.id

      const addFav = {
      userId: userId,
      movieId: 520763
       }

     const submitHandler = () => {
    
    dispatch(RemoveFavouriteFunction(addFav))

      };


    return (
      <div>
      <Header /> 
    <div className="movies">
      
             return (
    <div className="movies">
      { state.isLoading 

      ? <img src={loader} alt='Loading...' />

      :( <div>
        
          <div>
            
          <div key={id} className="eachMovie">
          <Link to={`/favorites/details/${id}`}>
              <img
                src={posterImg}
                alt="Display Image"
                className="movieListImg"
              />
              </Link>
          </div>
           <button onClick={submitHandler} className="favText" > Remove </button>
        
    </div>
    </div>
      )}
      </div>)
      </div>
      </div>
      )
  }

export default ShowFavouriteMovies;
