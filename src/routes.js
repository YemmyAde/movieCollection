import React from 'react'
import Homepage from './pages/homepage'
import MovieFullDetails from './pages/movieFullDetails'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MovieDetails from './components/movieDetails'
import Signupage from './pages/signup-page'
import Loginpage from './pages/loginpage'
import ProtectedRoute from './pages/ProtectedRoute'
import ShowFavouritepage from './pages/showFavouritePage'
import IsAuth from './components/isAuth'
import showFavouritePage from './pages/showFavouritePage'
import FavouriteMovieDetails from './components/favouriteMovieDetails'



const Routes = () => {

    return (
            <Router>
                <Switch> 
                    <Route exact path='/' component={Homepage} /> 
                    <Route exact path='/details/:id' component={MovieDetails} />   
                    <Route exact path='/favorites/:id' component={showFavouritePage} />  
                    <Route exact path='/favorites/details/:id' component={FavouriteMovieDetails} />  
                    <Route exact path='/login' component={Loginpage} />  
                    <Route exact path='/sign-up' component={Signupage} />   
                    <ProtectedRoute exact path="/favourite-movies" component={ShowFavouritepage} 
                isAuth={IsAuth}/>
                    <Route> 404 Not found</Route>
                </Switch>
                
           </Router> 
       
    )
}

export default Routes
