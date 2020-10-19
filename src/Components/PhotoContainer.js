import React, { Component } from 'react'; 
import Photo from './Photo';
import NotFound from './NotFound';

export default class PhotoContainer extends Component {
    constructor(props){
        super(props);
        this.state={
            photos: ""
        }
    }
    
    getPhotos(){
        let results = this.props.data;
        let imgs;
        if(results.length > 0){
                imgs = results.map(img => <Photo url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id}/>)
        } else {
                imgs= <NotFound />
        }

        this.setState({photos:imgs});
        console.log(this.state.photos);
    }

    render(){
        this.getPhotos();
        return(
        <div className="photo-container">
            <h2>{this.props.match.params.query}</h2>
            <ul>
                {this.state.photos}
            </ul>
        </div>
        );
    }
    
}




