import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //Another way to solve issue
  //Turn function into and arrow => function
  //ES6 arrow function automatically binds this for all code inside function
  onFormSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.term)
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
        //look at where the method is called(here) what is this on the left of .(dot?)
        //there is no SearchBar.onFormSubmit
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
