import React from 'react';

class SearchBar extends React.Component {
  //Can define constructor()with super, inside Component
  //ONE way to solve
  //define the constructor, bind the function and overwrite the existing one
  constructor() {
    super()
    this.onSubmit = this.onFormSubmit.bind(this)

  }
  state = { term: '' };

  onFormSubmit(event) {
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
