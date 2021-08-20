import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import movieFetchAsync from "../redux/actions/movieAction";
import { Link } from "react-router-dom";
import AddToFavouriteList from "./addToFavouriteList";
import loader from '../images/loader.gif'

const MovieDisplay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieFetchAsync());
  }, [dispatch]);

  const state = useSelector((state) => state.fetchMovie);
  const moviesDisplay = state.data.content
  return (
    <div className="movies">
      { state.isLoading 

      ? <img src={loader} alt='Loading...' />

      :(moviesDisplay.map((item) => {
        const posterImg = item.posterPath;
        const id = item.id;
        return (
          <div key={id} className="eachMovie">
            <Link to={`/details/${id}`}>
              <img
                src={posterImg}
                alt="Display Image"
                className="movieListImg"
              />
             
            </Link>
            
          </div>
        );
      }))
    }
      ;
    </div>
  );
};

export default MovieDisplay;
