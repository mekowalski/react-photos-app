import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Photo Search</label>
            <input type='text' value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
            //INPUT IS UNCONTROLLED
            //Why is State being used
            //Why is State updating when input is changed
            //Why is value being passed back into the input
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
