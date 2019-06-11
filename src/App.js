import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
//IMPORT ACTION CREATORS HERE
import  * as authActions from './actions/authActions.js';
//map state to props
const mapStateToProps = (store) => ({
  firstVarVal: store.auth.firstVarVal,
  userNameStr: store.auth.userNameStr,
  passwordStr: store.auth.passwordStr  
});

//map dispatch to props
const mapDispatchToProps = (dispatch) => ({
   updateFirstVarVal: (e) => dispatch(authActions.firstAction(e.target.value))
}); 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render(){ 
    return(
      <Fragment>
         <h1> Howdy </h1>
      <input className="mr-input" onChange={(e) => {
        this.props.updateFirstVarVal(e);
      }}>TYPE HERE</input>
      <p>{this.props.firstVarVal}</p>
      </Fragment>
     



    );
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(App);
