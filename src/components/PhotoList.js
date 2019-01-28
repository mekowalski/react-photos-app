import './PhotoList.css';
import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoList = props => {
  {
    //1. import PhotoCard
    //2. Replace img with PhotoCard
    //3. Remove alt, src
    //4. No longer need destructuring, return to original form of recieving photo object
    //5. Then pass that photo in as a prop
    //6. Still need to provide a key
  }
  const photos = props.photos.map((photo) => {
    return <PhotoCard key={photo.id} photo={photo} />
  });
    return <div className='photo-list'>{photos}</div>;
};

export default PhotoList
