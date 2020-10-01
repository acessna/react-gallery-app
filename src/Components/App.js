import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import Cars from './Cars';
import Birds from './Birds';
import Houses from './Houses';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      cars: [],
      birds: [],
      houses: []
    }
  }

  getImages = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        let imgs = response.data.photos.photo;
        return imgs;
    })
    // .catch(error => {
    //   console.log('Error fetching and parsing data', error);
    // });
  }

  componentDidMount(){
    this.setState({
      cars: this.getImages("cars"),
      birds: this.getImages("birds"), 
      houses: this.getImages("houses")
    });
  }


  render(){
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Route path='/cars' render = {() => <Cars carImgs={this.getImages("cars")}/>}/>
        <Route path='/birds' render = {() => <Birds />}/>
        <Route path='/houses' render = {() => <Houses />}/>
      </div>
    </BrowserRouter>
  );
  }
}

