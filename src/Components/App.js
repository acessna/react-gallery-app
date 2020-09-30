import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      pics: []
    };
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=dogs&safe_search=1&content_type=1&media=photos&per_page=15&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response);
      this.setState({
        pics: response.data.photos.photo
      });
      console.log(this.state.pics);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }



  render(){
  return (
    <div className="App">
    </div>
  );
  }
}

