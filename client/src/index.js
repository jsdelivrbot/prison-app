import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { 
    Stitch,
    RemoteMongoClient,
    UserPasswordCredential
} from "mongodb-stitch-browser-sdk";

  
  const stitchClient = Stitch.initializeDefaultAppClient("first_application-xnjws");
  
  login("user1@live.com","password").then(() => {
    // Initialize a MongoDB Service Client
    const mongodb = stitchClient.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    // Get a hook to the employees collection
    const prisoner = mongodb.db("prison").collection("prisoner");
    
    return prisoner.find({}, {
      // limit: 3,
      // sort: { "salary": -1 }
    })
      .asArray();
  })
    .then(displayPrisoners)
  
  function login(email, password) {
    const credential = new UserPasswordCredential(email, password);
    return stitchClient.auth.loginWithCredential(credential);
  }
  
  
  // Renders the the employees' information in the table
  function displayPrisoners(prisoner) {
    const PrisonersTableBody = document.getElementById("prisoners");
    const numResultsEl = document.getElementById("num-results");
    const tableRows = prisoner.map(prisoner => {
      return `
        <tr>
          <td>${prisoner.firstName}</td>
          <td>${prisoner.lastName}</td>
          <td>${prisoner.age}</td>
          <td>${prisoner.sentence}</td>
        </tr>
      `;
    });
    PrisonersTableBody.innerHTML = tableRows.join("");
    numResultsEl.innerHTML = prisoner.length;
  }
  

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();