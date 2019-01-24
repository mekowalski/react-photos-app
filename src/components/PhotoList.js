import React from 'react';

const PhotoList = props => {
  const photos = props.photos.map((photo) => {
    return <img src={photo.urls.regular} />
    {
      //find root JSX tag that is being returned
    }
  });
    return <div>{photos}</div>;
};

export default PhotoList
