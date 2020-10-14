import React, { Component } from 'react'; 
import Photo from './Photo';
import NotFound from './NotFound';
import axios from 'axios';
import apiKey from '../config';

export default class PhotoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: []
        }
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
        this.getImages(this.props.match.params.query)
        let imgs;
        const results = this.state.imgs;
        let title = this.props.match.params.query;
        if(results.length > 0){
            imgs = results.map(img => <Photo url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id}/>)
        } else {
            imgs = <NotFound />
        }
          return(
            <div className="photo-container">
                <h2>{title}</h2>
                <ul>
                    {imgs}
                </ul>
            </div>
          );

    }
}


