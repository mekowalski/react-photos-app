import React from 'react';

//class-based Component because State is needed here
//State is the term that will be typed and searched in the search bar
class SearchBar extends React.Component {
  onInputChange(event) {
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
            //onChange is a special Property name, different events have different prop names
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
