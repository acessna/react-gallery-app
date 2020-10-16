import React from 'react'; 
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {

    let results = props.data;
    let imgs;
    if(results){
            imgs = results.map(img => <Photo url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} key={img.id}/>)
    } else {
            imgs= <NotFound />
    }
    return(
    <div className="photo-container">
        <h2>{props.match.params.query}</h2>
        <ul>
            {imgs}
        </ul>
    </div>
    );
    
}

export default PhotoContainer;



