import React from 'react';

//class-based Component because State is needed here
//State is the term that will be typed and searched in the search bar
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' />
        </form>
      </div>
    );
  }
}

export default SearchBar
