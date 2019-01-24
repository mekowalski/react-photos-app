import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { photos: [] };

  //Contains a lot of Axios code and network request
  //App Component should not be responsible for this configuration
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
        Found: {this.state.photos.length} photos
      </div>
    );
  }
}

export default App
