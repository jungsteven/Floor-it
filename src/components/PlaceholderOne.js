import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';


class PlaceholderOne extends Component {
  constructor(props){
    super(props);
    this.state = {
      changePage: false,
      toggleChangePage: (route) =>{this.setState({changePage: route})}
    }
  }
  render(){
    if(this.state.changePage === true){
      console.log('redirecting');
      return 
    }
    switch(this.state.changePage){
      case('/landing'):
        return <Redirect to='/landing'></Redirect>;
      case('/canvas'):
       return <Redirect to='/canvas'></Redirect>
      default:
        return (
          <Fragment>
          <p>{'PLACEHOLDER ONE'} {'Who ordered the poo poo platter?' + ' ' + this.state.changePage}</p>
          <button onClick={()=>{this.state.toggleChangePage('/canvas'); console.log(this.state)}}></button>
          <button onClick={()=>{this.state.toggleChangePage('/landing'); console.log(this.state)}}></button>
          </Fragment>
        );
    }
  }
}

export default PlaceholderOne;