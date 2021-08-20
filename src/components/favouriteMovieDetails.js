import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import loader from '../images/loader.gif'
import Header from "./header";
import IsAuth from "./isAuth";
import favouriteMovieDetailsAsync from "../redux/actions/favouriteMovieDetailsAction";


const FavouriteMovieDetails = ({}) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const { data, isLoading } = state.favouriteMovieDetail;
  const { videos } = data;


  React.useEffect(() => {
    if (id && id !== "") {
      dispatch(favouriteMovieDetailsAsync(id));
    }
  }, [id]);


    const userId = state.login.data.id
    const addFav ={
      userId: userId,
      movieId: data.id
    }

    let idMovie 
    let key
    videos.map((item) => {
      idMovie = item.id;
      console.log('this is id',idMovie)
       key = item.key;
      console.log(idMovie)})
  

  return (
    <div>
    <Header />
    <div className="movies movies2">

          { isLoading 

          ? <div className='loaderDiv'> <img src={loader} alt='Loading...' /> </div>

          : (
          <>  <img src={data.posterPath} alt="" className='img'/>
      <img src={data.backdropPath} alt="" className='img' />
  
      <div className='center text '> 
        <p className='size detailsColor'> {data.overview}</p>
      </div>
        return (
          <div key={idMovie} className='eachMovie1'>
            <iframe
              src={`https://www.youtube.com/embed/${key}`}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
             
          </div>
        );
         </> )  }
        
    </div>
    </div>
  );
};

export default FavouriteMovieDetails;
