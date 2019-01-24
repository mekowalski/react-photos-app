import React from 'react';

const PhotoList = props => {
  const photos = props.photos.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular} />
  });
    return <div>{photos}</div>;
};

export default PhotoList
