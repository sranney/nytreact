import React, { Component } from 'react';
import './App.css';
import Search from "./pages/Search";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
      	<NavBar/>
        <Search/>
      </div>
    );
  }
}

export default App;
