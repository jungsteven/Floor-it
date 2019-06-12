import React, { Component } from 'react';
import '../styles.css';
const styleObj = {
  width: '100%',
  backgroundColor: 'yellow'
}

class Toolbar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id='toolbar'>
        <p>{'TOOLBAR'}</p>
      </div>
    );
  }
}

export default Toolbar;