import React from 'react';
//this Component just shoes a div with a photo inside of it

class PhotoCard extends React.Component {
  render() {
    {
      //photo object(L12-13) will be referred many times
      //destructure out the props
    }
    const { description, urls } = this.props.photo;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default PhotoCard
