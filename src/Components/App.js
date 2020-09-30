import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

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
      <div className="App">
        <Nav />
      </div>
    </BrowserRouter>
  );
  }
}

