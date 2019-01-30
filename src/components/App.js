import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import PhotoList from './PhotoList';

class App extends React.Component {
  state = { photos: [] };

  onSearchSubmit = async term => {
    const response = await unsplash
    .get('/search/photos', {
      params: { query: term }
    });
    this.setState({ photos: response.data.results });
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <PhotoList photos={this.state.photos} />
      </div>
    );
  }
}

export default App
