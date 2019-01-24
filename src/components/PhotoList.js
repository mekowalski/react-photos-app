import React from 'react';

const PhotoList = props => {
  props.photos.map((photo) => {
    return <img src={photo.urls.regular}/>
  });
  {
    //return statement finds the query for term
    //open the network/preview tab
    //open results tab and open first instance of returned result
    //there is a urls tag that will then open and provide 5 different types of urls
    //full, raw, regular small and thumb, in this case i call .regular
  }
  return <div>Photo List</div>
}

export default PhotoList
