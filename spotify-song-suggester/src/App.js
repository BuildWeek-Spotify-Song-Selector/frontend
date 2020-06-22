import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage'
import Navigation from './components/Navigation'
import Login from './components/LoginForm';

import styled from 'styled-components'
const ContainerDiv = styled.div`
  margin:0 auto;
    padding:0 auto;
    width: 100%;
    height: 100%;
    background-color: #222629;
`;



function App () {
  return (
    <Router>
    <ContainerDiv>
    <HomePage />
    </ContainerDiv>


    </Router>


  );
};
export default App;
