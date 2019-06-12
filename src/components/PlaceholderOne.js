import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';

class PlaceholderOne extends Component{
  constructor(props){
    super(props);
    this.state = {
      changePage: false,
      toggleChangePage: (val) =>{this.setState({changePage: val})}
    }
  }
  render(){
    switch(this.state.changePage){
      case ('/landing'):
        return <Redirect to={this.state.changePage} />;
      case ('/canvas'):
          return <Redirect to={this.state.changePage} />;
      default:
        return (
          <Fragment>
            <p>{'PLACEHOLDER ONE'} {'dwdw' + this.state.changePage}</p>
            <button onClick={()=>{this.state.toggleChangePage('/landing'); console.log(this.state)}}></button>
          </Fragment>
          );
    }
  }
}

export default PlaceholderOne;