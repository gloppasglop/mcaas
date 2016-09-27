import React from 'react';
import Container from './Container'
import { connect } from 'react-redux';

class ContainerList extends React.Component {
  render() {
    const {containers, selectedContainer, dispatch} = this.props;
    return (
      <div>
        {
          containers.map( container => {
            return(
              <div  key={container.Id} onClick={ () => dispatch({type:'SELECT_CONTAINER', container})}>
                <Container container={container} key={container.Id}/>
              </div>)
            })
        }
      </div>
      
    )
  }
}


function mapStateToProps(state) {
  return {
    containers: state.containers,
    selectedContainer: state.selectedContainer
  }
}

export default connect(mapStateToProps)(ContainerList);
