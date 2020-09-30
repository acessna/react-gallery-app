import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Cars from './Cars';
import Birds from './Birds';
import Houses from './Houses';



export default class App extends Component {

  constructor(){
    super();
    this.state = {
      pics: []
    };
  }

  getImages = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        pics: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }



  render(){
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Route path='/cars' render = {() => <Cars />}/>
        <Route path='/birds' render = {() => <Birds />}/>
        <Route path='/houses' render = {() => <Houses />}/>
      </div>
    </BrowserRouter>
  );
  }
}

