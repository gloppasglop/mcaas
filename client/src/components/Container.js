import React from 'react';
import {  Panel } from 'react-bootstrap';


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

export default Container;