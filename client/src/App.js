import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FontAwesome from 'react-fontawesome';
import {  Panel, PageHeader } from 'react-bootstrap';


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


class Container extends React.Component {

  render() {
    var container = this.props.container;
    var canonicalName = container.Names[0].replace(/\//g,'');
    var bsStyle = (container.State !== "running" ) ? 'danger' : 'primary';
    return (
      <Panel header={canonicalName} bsStyle={bsStyle} >
        <p>{canonicalName} with id: {container.Id}</p>
        <p>Status: {container.State}</p>
      </Panel>
    )
  }
}

class ContainerList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.containers.map( container => {
            return(<Container container={container} key={container.Id} />)
            })
        }
      </div>
      
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

    this.interval = setInterval( () => { 
      fetch('/dockerapi/containers/')
      .then((response) =>  { return response.json() })
      .then((responseJson) => { this.setState({containers: responseJson}) })
      .catch((error) => {
        console.error(error);
        }); 
    }, 1000 );

    //this.setState({containers: [ {name: 'essai'}, {name: 'test'}]});
  }

  render() {
    return(

      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-12">
                  <PageHeader><FontAwesome name='cubes'>Containers</FontAwesome></PageHeader>
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
