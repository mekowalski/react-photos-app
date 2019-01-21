import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value)
  }
  //name of function is convention of: on + name of element with CB assignment + event to watch for
  //ie: onInputChange
  //this is called on <input> being changed

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Photo Search</label>
            <input type='text' onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
