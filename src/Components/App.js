import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import SearchForm from './SearchForm';
import RouteError from './RouteError';
import axios from 'axios';
import apiKey from '../config';


class App extends Component {

  state ={
    imgs: [],
    loading: true
  }

  getImages = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
        this.setState({imgs: response.data.photos.photo});
        this.setState({loading: false});
    })
     .catch(error => {
       console.log('Error fetching and parsing data', error);
     });
  }

  componentDidMount(){
    this.getImages(this.props.match.params.query);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.query !== this.props.match.params.query) {
      this.getImages(this.props.match.params.query);
    }
  }

  render(){
    return (
        <div className="container">
  
          <SearchForm />
          <Nav />
            <Route exact path="/">
              <Redirect to="/Home/Cars" />
            </Route>
            {this.state.loading
            ? <p>Loading images...</p>
            :<Route path="/Search/:query"  render= { () => <PhotoContainer  query={this.props.match.params.query} data={this.state.imgs} />}/>
            }
            {this.state.loading
            ? <p>Loading images...</p>
            : <Route path="/Home/:query" render= { () => <PhotoContainer query={this.props.match.params.query} data={this.state.imgs} />}/>
            }
        </div>
    );
  }
}

export default withRouter(App);

