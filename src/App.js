import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

//REACT ROUTER
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

//COMPONENTS 
import PlaceholderOne from './components/PlaceholderOne.js';
import PlaceholderTwo from './components/PlaceholderTwo.js';
import Toolbar from './components/Toolbar.js';
import CanvasPage from './containers/canvasPage.js';
import SignIn from './components/SignIn.js';
//IMPORT ACTION CREATORS HERE
// import  * as authActions from './actions/authActions.js';


// //map state to props
// const mapStateToProps = (store) => ({
//   firstVarVal: store.auth.firstVarVal,
//   userNameStr: store.auth.userNameStr,
//   passwordStr: store.auth.passwordStr  
// });

// //map dispatch to props
// const mapDispatchToProps = (dispatch) => ({
//    updateFirstVarVal: (e) => dispatch(authActions.firstAction(e.target.value))
// }); 

class App extends Component {
  constructor(props) {
    super(props)
  }
  render(){
      // const headerStyle = {
      //   textAlign: 'center',
      //   fontSize: '52px',
      //   color: 'white',
      //   fontStyle: 'Impact', 
      // } 
      // const buttonStyle = {
      //   backgroundColor: 'white',
      //   width: '1800px',
      //   height: '100px',
      //   marginLeft: '15px',
      // }
    return(
      <Fragment>
        <Toolbar />
        <Router>
          <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/landing' component={PlaceholderTwo} />
            <Route path='/canvas' component={CanvasPage} />
          </Switch>
        </Router>
      </Fragment>  
    )
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;