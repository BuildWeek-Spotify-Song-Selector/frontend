import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Login from './components/LoginForm';




function App () {
  return (
    <div className="app">
    <Router>
    <Login />
    </Router>
    </div>



  );
};
export default App;
