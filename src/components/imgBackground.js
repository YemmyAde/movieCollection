import React from "react";
import "./styles.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";


const ImgBackground = () => {
  

  return (
    <div>
      <div className="backgroundImg"> </div>
      <div class='flexContainer'>
      <Link to='/'>
        <img src={logo} alt="logo" className='logoImg' />
        </Link>
        <Link to='/sign-up'>
        <button className='sign'> Sign Up </button>
        </Link>
        {/* <Link to={`/favorite/${id}`}>
            <button class='favText'> Favourite List </button>
        </Link> */}
      </div>
    </div>
  );
};

export default ImgBackground;
