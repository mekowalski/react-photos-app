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

  setSpans = () => {
    const height = this.photoRef.current.clientHeight;
    const spans = Math.ceil(height / 9);

    this.setState({ spans: spans });
  }

  render() {
    const { description, urls } = this.props.photo;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.photoRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default PhotoCard
