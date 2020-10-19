import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import NotFound from './NotFound';
import axios from 'axios';
import apiKey from '../config';


class App extends Component {

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

  componentDidMount(){
    this.getImages(this.props.match.params.query);
    console.log(this.props);
  }

  render(){
    return (
        <div className="container">
          <SearchForm />
          <Nav />
          <Switch>
            <Route exact path="/">
            <Redirect to="/Home/Cars" />
            </Route>
            <Route exact path="/Search/:query" render= { routeProps => <PhotoContainer {...routeProps} data={this.state.imgs} />}/>
            <Route  exact path="/Home/:query" render= {routeProps => <PhotoContainer {...routeProps} data={this.state.imgs} />}/>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);

