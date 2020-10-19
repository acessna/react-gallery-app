import React, { Component } from 'react'; 
import Photo from './Photo';
import NotFound from './NotFound';

export default class PhotoContainer extends Component {

    getPhotos(){
        let results = this.props.data;
        let imgs;
        if(results.length > 0){
                imgs = results.map(img => <Photo url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id}/>);
        } else {
                imgs= <NotFound />
        }
        return imgs;
    }

    render(){
        return(
        <div className="photo-container">
            <h2>{this.props.match.params.query}</h2>
            <ul>
                {this.getPhotos()}
            </ul>
        </div>
        );
    }
    
}




