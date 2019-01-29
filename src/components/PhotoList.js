import './PhotoList.css';
import React from 'react';
import PhotoCard from './PhotoCard';

const PhotoList = props => {
  const photos = props.photos.map((photo) => {
    return <PhotoCard key={photo.id} photo={photo} />
  });
    return <div className='photo-list'>{photos}</div>;
};

export default PhotoList
