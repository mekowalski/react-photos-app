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
    console.log(this.photoRef.current.clientHeight);
    //chrome console is extremely 'fancy'
    //when ref is printed out, console does not yet know what data is inside the img
    //the console only knows the height once the img object is expanded and current: img is expanded
    //THEN chrome looks at that DOM node, pulls info and prints it on the console
    //when component first renders, the next second, the height of the image is printed out
    //although the img has not yet loaded, therefore there is NO image
    //this is about an order of operations
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
