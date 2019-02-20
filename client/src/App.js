import React, { Component } from 'react';
import './App.css';
import './containers/App';
import 'foundation-sites';



class App extends Component {
  componentDidMount() {

    $(document).foundation();
  
  }
  
  render() {
    return (
      <App className="App">
      </App>
    );
  }
}

export default App;
