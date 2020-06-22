import React from "react";
import { BrowserRouter as Router, Route, Link }from 'react-router-dom'
import Login from './LoginForm' 
import "./Navigation.css";


const Navigation = () => {

  return (
    <div className="navBar">
      <h3>Spotify Song Suggester</h3>
      <nav>
        <ul>
        <Router>
        <Link to="/WelcomePage">Home</Link>
         <Link to="/Login">Login</Link>
        </Router>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;
