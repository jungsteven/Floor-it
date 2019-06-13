import React, { Component, Fragment } from 'react';
import '../styles.css';

class Sidebar extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        };
    }
   render(){
       return (
         <Fragment>
           
           <nav className="side-bar">
              <ul className="side-ul">
                <li className="side-li" onClick={()=>{this.props.onButtonClick(175,75,'red')}} ><p>Bed<span className="spam" ><i className="fas fa-cat"></i></span></p></li>
                <li className="side-li"><a href="">Vase<span className="spam"><i className="fas fa-cat"></i></span> </a></li>
                <li className="side-li" onClick={()=>{this.props.onButtonClick(200,100,'#FFDA1A')}} ><p>Couch<span className="spam"><i className="fas fa-cat"></i></span> </p></li>
                <li className="side-li"onClick={()=>{this.props.onButtonClick(25,200,'green')}} ><p>TV<span className="spam"><i className="fas fa-cat"></i></span> </p></li>
                <li className="side-li" onClick={()=>{this.props.renderWardrobe()}}><p>Wardrobe<span className="spam"><i className="fas fa-cat"></i></span> </p></li>
                <li className="side-li"><a href="">Cat<span className="spam"><i className="fas fa-cat"></i></span> </a></li>
              </ul>
            </nav>
         </Fragment>
       );
   }
}

export default Sidebar;