import React, { Component } from 'react'; 
import Photo from './Photo';
import axios from 'axios';
import apiKey from '../config';

export default class PhotoContainer extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
          imgs: [],
        }
      }
    
      getImages = (query) => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({imgs: response.data.photos.photo});
        })
         .catch(error => {
           console.log('Error fetching and parsing data', error);
         });
      }

      render(){

        this.getImages(this.props.match.params.category);
        console.log(this.state.imgs);

          return(
            <h1>PhotoContainer</h1>
          );
      }

}

