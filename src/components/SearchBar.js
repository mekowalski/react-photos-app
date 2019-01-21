import React from 'react';

//class-based Component because State is needed here
//State is the term that will be typed and searched in the search bar
class SearchBar extends React.Component {
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Photo Search</label>
            <input type='text' />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
