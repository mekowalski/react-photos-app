import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID cd676e1ef029ce061d3722b47bc05267297569b249b49306547aa9fb1de2213e'
      }
    })
    .then((response) => {
      console.log(response.data.results) //returns an arry of objects that represent 1 distinct photo
    })
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
