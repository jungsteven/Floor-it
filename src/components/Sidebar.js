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
                <li className="side-li"><a href="">Bed<span><i className="fas fa-cat"></i></span></a></li>
                <li className="side-li"><a href="">Vase<span><i className="fas fa-cat"></i></span> </a></li>
                <li className="side-li"><a href="">Couch<span><i className="fas fa-cat"></i></span> </a></li>
                <li className="side-li"><a href="">TV<span><i className="fas fa-cat"></i></span> </a></li>
                <li className="side-li"><a href="">Wardrobe<span><i className="fas fa-cat"></i></span> </a></li>
                <li className="side-li"><a href="">Cat<span><i className="fas fa-cat"></i></span> </a></li>
              </ul>
            </nav>
         </Fragment>
       );
   }
}

export default Sidebar;