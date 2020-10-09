import React from 'react'; 
import Photo from './Photo';
import NotFound from './NotFound';
import { useLocation } from 'react-router-dom';

const PhotoContainer = (props, {match}) => {
        let imgs;
        let location = useLocation();
        let title = location.pathname.substring(1);
        console.log(location);
        const results = props.data;
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

export default PhotoContainer;

