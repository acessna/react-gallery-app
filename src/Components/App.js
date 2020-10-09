import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import axios from 'axios';
import apiKey from '../config';



export default class App extends Component {

    state = {
      searchedImgs: [],
      Cars: [],
      Houses: [],
      Birds: []
    }




  getImages = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        this.setState({searchedImgs: response.data.photos.photo});
    })
     .catch(error => {
       console.log('Error fetching and parsing data', error);
     });
  }

  getCategory = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({[query]: response.data.photos.photo});
    })
     .catch(error => {
       console.log('Error fetching and parsing data', error);
     });
  }
      componentDidMount(){
        this.getCategory("Cars");
        this.getCategory("Houses");
        this.getCategory("Birds");
    }

  render(){
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm onSearch={this.getImages}/>
        <Nav />
        <Route exact path="/">
        <Redirect to="/Cars" />
        </Route>
        <Route path="/search/:query" render ={() => <PhotoContainer data={this.state.searchedImgs}/>}/>
        <Route path="/Cars" render = {() => <PhotoContainer data={this.state.Cars}/>}/>
        <Route path="/Houses" render = {() => <PhotoContainer data={this.state.Houses}/>}/>
        <Route path="/Birds" render = {() => <PhotoContainer data={this.state.Birds}/>}/>
      </div>


    </BrowserRouter>
  );
  }
}

