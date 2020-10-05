import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';



export default class App extends Component {

  render(){
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Route exact path='/:category' component = {PhotoContainer}/>
      </div>
    </BrowserRouter>
  );
  }
}

