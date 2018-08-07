import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
   Stitch,
   RemoteMongoClient,
   GoogleRedirectCredential,
   FacebookRedirectCredential
} from "mongodb-stitch-browser-sdk";

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

let appId = "first_application-xnjws";