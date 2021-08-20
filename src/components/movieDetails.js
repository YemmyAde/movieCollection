import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import movieDetailsAsync from "../redux/actions/movieDetailsAction";
import loader from '../images/loader.gif'
import Header from "./header";
import IsAuth from "./isAuth";
import { AddFavouriteFunction } from "../redux/actions/FavouriteAction";


const MovieDetails = ({}) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const [text, setText] = useState("Add to Favourites")
  const { data, isLoading } = state.movieDetails;
  console.log(isLoading)
  const { videos } = data;
console.log('isId', data.id)
  React.useEffect(() => {
    if (id && id !== "") {
      dispatch(movieDetailsAsync(id));
    }
  }, [id]);


    const userId = state.login.data.id
    const addFav ={
      userId: userId,
      movieId: data.id
    }
    const submitHandler = (e) => {
        e.preventDefault();
       
        // if (IsAuth ) {
        //   history.push('/login')
          // dispatch(AddFavouriteFunction())
        //   console.log(movieId)
        // }
        // else{
            dispatch(AddFavouriteFunction(addFav))
            setText('Added to favourites')
        // }

      };

  return (
    <div>
    <Header />
    <div className="movies movies2">

          { isLoading 

          ? <div className='loaderDiv'> <img src={loader} alt='Loading...' /> </div>

          : (
          <>  <img src={data.posterPath} alt="" className='img'/>
      <img src={data.backdropPath} alt="" className='img' />
   
    <div className='addFav'>
            <button onClick={submitHandler} class='favText'> {text} </button>
        </div>
      <div className='center text '> 
        <p className='size detailsColor'> {data.overview}</p>
      </div>
      {videos.map((item) => {
        const id = item.id;
        const key = item.key;
        console.log(id)
        return (
          <div key={id} className='eachMovie1'>
            <iframe
              src={`https://www.youtube.com/embed/${key}`}
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              title="video"
            />
             
          </div>
        );
      })}
         </> )  }
        
    </div>
    </div>
  );
};

export default MovieDetails;
