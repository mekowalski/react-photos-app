import React from 'react';

class PhotoCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }

    this.photoRef = React.createRef();
  }

  componentDidMount() {
    this.photoRef.current.addEventListener('load', this.setSpans);
  }

  //assign height to variable
  //then get number of spans the photo requires
  setSpans = () => {
    const height = this.photoRef.current.clientHeight;

    //take height and divide it by the grid-row-end pixels(300) and add 1 to make sure if the photo needs
    //a portion of the row, it wll be rounded up(going to the next highest row)
    //ceil to cap the value
    //each photo will now take up far more spans than before but that is completely fine
    const spans = Math.ceil(height / 15);

    this.setState({ spans: spans });
  }

  render() {
    const { description, urls } = this.props.photo;
    return (
      // take spans value and assign it to the div as a style
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.photoRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default PhotoCard
