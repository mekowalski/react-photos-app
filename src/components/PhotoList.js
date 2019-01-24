import React from 'react';

const PhotoList = props => {
  {
    //create a variable in order to call and ACTUALLY display the photos
  }
  const photos = props.photos.map((photo) => {
    return <img src={photo.urls.regular} />
  });
    return <div>{photos}</div>;
};

export default PhotoList
