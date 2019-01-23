import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    //call to Axios function
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App
