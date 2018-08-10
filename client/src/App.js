import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import MenuAppBar from './MenuAppBar';
import EnhancedTableHead from './Table';
import SimpleModal from './Modal';
import { Stitch } from 'mongodb-stitch-browser-sdk'
// import FacebookLogin from './FacebookLogin';

var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://marwan01:motdepasse@my-first-cluster-hzz9b.gcp.mongodb.net/First_Database?retryWrites=true";
MongoClient.connect(uri, function(err, client) {
   const collection = client.db("First_Database").collection("First_Collection");
   // perform actions on the collection object
   client.close();
});

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
