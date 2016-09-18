import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FontAwesome from 'react-fontawesome';
import { Panel } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MiCaas</h2>
        </div> 
        <Panel>Test Panel</Panel>
        <ContainerSection />
      </div>
    );
  }
}


class Container extends React.Component {

  render() {
    return (
      <li>{this.props.name}</li>
    )
  }
}

class ContainerList extends React.Component {
  render() {
      console.log(this.props);
    return (
      <ul>
        {
          this.props.containers.map( container => {
            return(<Container name={container.Names[0]} key={container.Id}/>)
            })
        }
      </ul>
      
    )
  }
}

class ContainerSection extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      containers: []
    }
  }

  componentDidMount() {

    fetch('/dockerapi/containers/')
      .then((response) =>  { return response.json() })
      .then((responseJson) => { this.setState({containers: responseJson}) })
      .catch((error) => {
        console.error(error);
        });
    console.log(this.state);
    //this.setState({containers: [ {name: 'essai'}, {name: 'test'}]});
  }

  render() {
    return(

      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-12">
                  <h1 className="page-header"><FontAwesome name='cubes'>Containers</FontAwesome></h1>
              <div>
              <ContainerList containers={this.state.containers}/>
            </div>          
                </div>
          </div>
      </div>
    )
  }
}

export default App;
