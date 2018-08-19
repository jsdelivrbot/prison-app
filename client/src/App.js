import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './MenuAppBar';
import EnhancedTableHead from './Table';
import SimpleModal from './Modal';
import StitchApp from './StitchApp';

const stitchApp = StitchApp();
let prisoners = stitchApp.prisoner.find({}, {}).asArray(); // .then(displayPrisoners);
prisoners.displayPrisoners();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Prison</h1>
        </header>
        <p className="App-intro">
          <code>Here I am going to have the prison layout</code> 
        </p>
        
        <SimpleModal />

        <MenuAppBar />



          <EnhancedTableHead />

      </div>
    
    );
  }
}


export default App;
