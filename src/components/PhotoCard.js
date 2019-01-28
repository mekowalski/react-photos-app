import React from 'react';
//this Component just shoes a div with a photo inside of it

class PhotoCard extends React.Component {
  render() {
    return (
      <div>
      {
        //specify alt and src prop
        //Assume Photo object is passed to the PhotoCard as a prop called photo
      }
        <img
          alt={this.props.photo.description}
          src={this.props.photo.urls.regular}
        />
      </div>
    );
  }
}

export default PhotoCard
