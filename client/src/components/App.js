import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { PageHeader } from 'react-bootstrap';

import ContainerSection from './ContainerSection';

 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PageHeader>Welcome to MineCaas</PageHeader>
        </div> 
        <ContainerSection />
      </div>
    );
  }
}



export default App;
