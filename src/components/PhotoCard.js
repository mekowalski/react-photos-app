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
  componentDidMount() {
    console.log(this.photoRef);
  }

  render() {
    const { description, urls } = this.props.photo;
    return (
      <div>
        <img ref={this.photoRef} alt={description} src={urls.regular} />
      </div> //ref will tell a bit about the img DOM node, ref is a JSX tag, not a DOM element
    );
  }
}

export default PhotoCard
