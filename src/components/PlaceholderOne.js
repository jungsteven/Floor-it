import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';

class PlaceholderOne extends Component{
  constructor(props){
    super(props);
    this.state = {
      changePage: false,
      toggleChangePage: () =>{this.setState({changePage: true})}
    }
  }
  render(){
    if(this.state.changePage === true){
      console.log('redirecting');
      return <Redirect to='/landing'></Redirect>
    }
    return(
      <Fragment>
        <p>{'PLACEHOLDER ONE'} {'dwdw' + this.state.changePage}</p>
        <button onClick={()=>{this.state.toggleChangePage(); console.log(this.state)}}></button>
      </Fragment>
    );
  }
}

export default PlaceholderOne;