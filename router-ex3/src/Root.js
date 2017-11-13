import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

class Root extends Component{
  render(){
    return(
        <Router>
          <App />
        </Router>
    )
  }
}

export default Root;
