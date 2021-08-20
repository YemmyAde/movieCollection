import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import IsAuth from "./isAuth";
import { AddFavouriteFunction } from "../redux/actions/FavouriteAction";


const AddToFavouriteList = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    const movieContent= state.fetchMovie.data.content
    const id = state.login.data.id
    const submitHandler = (e) => {
        e.preventDefault();
       
        if (!IsAuth ) {
         
        
        }
        else{
            dispatch(AddFavouriteFunction())
        }

      };
  
    return (
        <div className='addFav'>
            <button onClick={submitHandler} class='favText'> Add to favourite </button>
        </div>
    )
}

export default AddToFavouriteList
