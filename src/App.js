import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';

//REACT ROUTER
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

//COMPONENTS 
import PlaceholderOne from './components/PlaceholderOne.js';
import PlaceholderTwo from './components/PlaceholderTwo.js';
import Toolbar from './components/Toolbar.js';


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
    return(
      <Fragment>
        <Toolbar></Toolbar>
        <Router>
          <Switch>
            <Route exact path='/' component={PlaceholderOne} />
            <Route path='/landing' component={PlaceholderTwo} />
          </Switch>
        </Router>
      </Fragment>  
    )
  }
}
  
// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App