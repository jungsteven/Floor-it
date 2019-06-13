import React, { Component } from 'react';
import '../styles.css';

class Toolbar extends Component{
  constructor(props){
		super(props);
  }
  render(){
    return(
      <nav className="menu">
	<ol>
		<li className="menu-item"><a href="#0">Hem</a></li>
		<li className="menu-item"><a href="#0">Blogg</a></li>
		<li className="menu-item"><a href="#0">Planlösning</a>
			<ol className="sub-menu">
				<li className="menu-item"><a href="#0">Sovrum</a></li>
				<li className="menu-item"><a href="#0">Vardagsrum</a></li>
				<li className="menu-item"><a href="#0">Badrum</a></li>
			</ol>
		</li>
		<li className="menu-item"><a href="#0">Hitta butik</a>
			<ol className="sub-menu">
				<li className="menu-item"><a href="#0">Butikssökare</a></li>
				<li className="menu-item"><a href="#0">Toppval</a></li>
				<li className="menu-item"><a href="#0">Forum</a></li>
			</ol>
		</li>
		<li className="menu-item"><a href="#0">Möt Steven Jung</a></li>
	</ol>
		</nav>
    );
  }
}
export default Toolbar;