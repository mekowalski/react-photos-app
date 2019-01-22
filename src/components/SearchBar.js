import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //need to disable default behavior
  onFormSubmit(event) {
    event.preventDefault()
    console.log('prevent default worked')
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Photo Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
