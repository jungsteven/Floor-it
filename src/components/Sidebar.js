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
                <li className="side-li"><a href="">Bed<span className="spam"><i className="fas fa-cat"></i></span></a></li>
                <li className="side-li"><a href="">Vase<span className="spam"><i className="fas fa-cat"></i></span> </a></li>
                <li className="side-li"><a href="">Couch<span className="spam"><i className="fas fa-cat"></i></span> </a></li>
                <li className="side-li"><a href="">TV<span className="spam"><i className="fas fa-cat"></i></span> </a></li>
                <li className="side-li"><a href="">Wardrobe<span className="spam"><i className="fas fa-cat"></i></span> </a></li>
                <li className="side-li"><a href="">Cat<span className="spam"><i className="fas fa-cat"></i></span> </a></li>
              </ul>
            </nav>
         </Fragment>
       );
   }
}

export default Sidebar;