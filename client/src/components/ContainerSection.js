import React from 'react';
import ContainerList from './ContainerList';
import { connect } from 'react-redux';

import FontAwesome from 'react-fontawesome';
import { PageHeader } from 'react-bootstrap';

/*import  * as ContainerActions from '../actions.js';*/



class ContainerSection extends React.Component {

 /* constructor(props){
    super(props);
    console.log(props);
    this.props.dispatch({type: 'TEST'});
    }
    */

 /* componentDidMount() {

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
  */

  render() {

   const {containers, selectedContainer} = this.props;
   if (selectedContainer === null ) {
      console.log("Null");
   } else {
      console.log("Pas null");
      console.log(selectedContainer);
   }
   let essai = selectedContainer === null ? "nothing selected" : selectedContainer.Id;
   console.log(essai);

    return(
      <div className="container-fluid">
          <div className="row">
              <div className="col-lg-12">
                  <PageHeader><FontAwesome name='cubes'>Containers ({essai})</FontAwesome></PageHeader>
              <div>
              <ContainerList containers={containers}/>
            </div>          
                </div>
          </div>
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

export default connect(mapStateToProps)(ContainerSection);

