import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { photos: [] };
  //expect state property to contain an array, allowing to call certain functions
  //default it to an empty array

  async onSearchSubmit(term) {
    const response = await axios
    .get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID cd676e1ef029ce061d3722b47bc05267297569b249b49306547aa9fb1de2213e'
      }
    });
    console.log(this)
    this.setState({ photos: response.data.results });
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.photos.length} photos
        {
          //Unhandled Rejection (TypeError): this.setState is not a function
          //Use 1 of 3 solutions of: ES6 arrow function, constructor function or wrap onSearchSubmit
        }
      </div>
    );
  }
}

export default App
