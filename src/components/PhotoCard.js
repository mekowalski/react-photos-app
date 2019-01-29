import React from 'react';

//define constructor for creating refs
//call React.createRef() and assign it to an instance variable, so that the variable can be referred later
//on inside the class
class PhotoCard extends React.Component {
  constructor(props) {
    super(props)

    this.photoRef = React.createRef();
  }

  //define componentDidMount()
  //access the height ONLY after it becomes available
  //add a basic, plain, vanilla, js event listener
  //2nd arg will be a cb()
  componentDidMount() {
    this.photoRef.current.addEventListener('load', this.setSpans);
  }

  //the ultimate prop inside is the 'grid-row-end' property that takes units of spans
  //when the height is retrieved it will be used to set the span value
  setSpans = () => {
    console.log(this.photoRef.current.clientHeight);
  }

  render() {
    const { description, urls } = this.props.photo;
    return (
      <div>
        <img ref={this.photoRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default PhotoCard
