import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ClassComponentPage from './pages/ClassComponentPage'
// import FunctionComPage from './pages/FunctionComPage'
import Search from './pages/Search'
import LifeCycle from './pages/LifeCycle';
function tell (msg) {
  console.log('msg:', msg)
}
class App extends Component {
  render () {
    return (
      <div className="App">
        <Search title="表头" tell={tell} />
        <LifeCycle />
      </div>
    );
  }
}

export default App;
