import React, { Component } from 'react';
import Search from "./pages/Search";
import NavBar from "./components/NavBar";

//overall application component
//has two components
//first, navbar
//second, search
//search component has form, results and modal that shows stored results saved in mongodb
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