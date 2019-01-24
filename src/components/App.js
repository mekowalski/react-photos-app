import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { photos: [] };

  onSearchSubmit = async term => {
    const response = await axios
    .get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID cd676e1ef029ce061d3722b47bc05267297569b249b49306547aa9fb1de2213e'
      }
    });
    this.setState({ photos: response.data.results });
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.photos.length} photos
      </div>
    );
  }
}

export default App
