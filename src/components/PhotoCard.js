import React from 'react';

//define constructor for creating refs
//call React.createRef() and assign it to an instance variable
class PhotoCard extends React.Component {
  constructor(props) {
    super(props)

    this.photoRef = React.createRef();
  }

  render() {
    const { description, urls } = this.props.photo;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default PhotoCard
