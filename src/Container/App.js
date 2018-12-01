import React, { Component } from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import Login from '../Components/Login/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />  
        </Helmet>
        <Login/>
      </div>
    );
  }
}

export default App;
