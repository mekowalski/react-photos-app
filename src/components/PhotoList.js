import React from 'react';

const PhotoList = props => {
  const photos = props.photos.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={regular} />
    {
      //photo is referenced 3 times(L5)
      //destructure out the 3 properties inside the inner function(description, id and urls)
      //L4: holy moly!!!! i know what this is now and how it works!!!!
    }
  });
    return <div>{photos}</div>;
};

export default PhotoList
