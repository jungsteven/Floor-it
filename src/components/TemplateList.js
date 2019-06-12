import React, { Component } from 'react';

class TemplateList extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const placeholderList = [];
    for(let x = 0; x < 101; x += 1){
      placeholderList.push(<div class='templateData'><p>{'TEMPLATE NUM' + x}</p></div>)
    }
    return(
      <div id='templatelist'>
        {placeholderList}
      </div>
    )
  }
}
export default TemplateList;