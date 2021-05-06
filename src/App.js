
import './App.css';
import React, { Component } from 'react';

class App extends Component{
  render() {
    return <>
    <h1>Bonjour{this.props.nom}</h1>
    </>;
  }
}

/*
function App(props) {
  return <>
  <h1>bonjour{props.nom}
  </h1>
  </>
}
export default App
*/
export default App