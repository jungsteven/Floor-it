import React, { Component, Fragment } from 'react';

class TemplateList extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const templatesList = [];
    for(let x = 0; x < 101; x += 1){
      templatesList.push(<div key={x} className='templateData'><a className="list-items" href="#0">{'Välj / Ladda en mall ' + x}</a></div>)
    }
    return(
      <Fragment>
      <div id='templatelist'>
        {templatesList}
      </div>
      </Fragment>
    )
  }
}
export default TemplateList;