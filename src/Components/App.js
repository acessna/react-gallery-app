import React, { Component } from 'react';
import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import NotFound from './NotFound';
import axios from 'axios';
import apiKey from '../config';


export default class App extends Component {

  state ={
    imgs: []
  }

  getImages = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        this.setState({imgs: response.data.photos.photo});
    })
     .catch(error => {
       console.log('Error fetching and parsing data', error);
     });
  }

  render(){
  return (
    <BrowserRouter>
      <div className="container">
        <SearchForm />
        <Nav />
        <Switch>
          <Route exact path="/">
          <Redirect to="/home/Cars" />
          </Route>
          <Route exact path="/search/:query" render= { routeProps => <PhotoContainer {...routeProps} data={this.state.imgs} getImages={this.getImages}/>}/>
          <Route  exact path="/home/:query" render= {routeProps => <PhotoContainer {...routeProps} data={this.state.imgs} getImages={this.getImages}/>}/>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
  }
}

