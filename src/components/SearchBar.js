import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Photo Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
            />
            //this is now a controlled element
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
