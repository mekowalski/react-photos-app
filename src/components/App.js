import React from 'react';
import SearchBar from './SearchBar';

//turn App to a class-based Component
class App extends React.Component {
  //define callback()
  onSearchSubmit(term) {
    console.log(term)
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '10px'}}>
      {//pass down callback() as a prop to SearchBar
      //keep naming similar to function
      }
      <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App
