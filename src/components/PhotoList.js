import React from 'react';

const PhotoList = props => {
  const photos = props.photos.map((photo) => {
    return <img alt={photo.description} key={photo.id} src={photo.urls.regular} />
    {
      //create-react-app would like an alt prop(description of image shown on screen)
      //in case photo cannot be fetched
      //or if someone with accessibility issues is using the app
      //fortunately the photo objects returned have a description property attached
    }
  });
    return <div>{photos}</div>;
};

export default PhotoList
