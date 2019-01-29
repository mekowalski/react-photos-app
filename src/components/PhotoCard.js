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
    console.log(this.photoRef.current.clientHeight);
    //some search terms return the height while others dont. wth?
  }

  render() {
    const { description, urls } = this.props.photo;
    return (
      <div>
        <img ref={this.photoRef} alt={description} src={urls.regular} />
      </div> //ref will tell a bit about the img DOM node, ref is a JSX tag, not a DOM element
      //ref itself is a JS object that has a curent property referencing the DOM node
      //in console can see the img tag and its clientHeight
    );
  }
}

export default PhotoCard
