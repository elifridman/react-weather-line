import React, { Component } from 'react';
import SearchBar from './components/search-bar/search-bar';
import ChartList from './components/chart-list/chart-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <SearchBar/>
          <ChartList/>
        </div>

      </div>
    );
  }
}

export default App;
