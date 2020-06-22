import React, { useState } from 'react';
import { BrowserRouter as Router, Route, browserHistory, indexRouter, Link } from 'react-router-dom';
import Navigation from './Navigation'
import WelcomePage from './WelcomeCard'
import Login from './LoginForm'
import './Homepage.css'




const HomePage = () => {


  return (
    
    <div class="HomeDiv">
    <Navigation />
    <div class="cards">
    
    <Router>

    <Route exact path="/" component={WelcomePage}/>

         <Route exact path="/Login" component={Login} />
        </Router>
    </div>
    
    </div>
    )
}

export default HomePage
