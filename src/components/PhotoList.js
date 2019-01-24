import React from 'react';

const PhotoList = props => {
  const photos = props.photos.map((photo) => {
    return <img key={photo.id} src={photo.urls.regular} />
    {
      //find root JSX tag(<img>, it could be <div>) that is being returned from map statement(the img)
      //give img a key= prop
      //id is given from API in the photo object
    }
  });
    return <div>{photos}</div>;
};

export default PhotoList
