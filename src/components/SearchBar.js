import React from 'react';

//class-based Component because State is needed here
//State is the term that will be typed and searched in the search bar
class SearchBar extends React.Component {
  onInputChange(event) {
    //event is JS object, usually one argument inside the entire function
    //that event argument is the text value that will be typed
    // event.target.value
    console.log(event.target.value)
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Photo Search</label>
            <input type='text' onChange={this.onInputChange} />
            //when a method is passed to a prop, that is a callback function
            //a set of () is NOT put with the function
            //if () is paired it will be called with render() is called and that isn't the purpose
            //onInputChange should only be called later in the future
            //onInputChange is called as a reference for input
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
