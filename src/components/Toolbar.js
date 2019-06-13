import React, { Component } from 'react';
import '../styles.css';

class Toolbar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <nav class="menu">
	<ol>
		<li class="menu-item"><a href="#">Hem</a></li>
		<li class="menu-item"><a href="#">Blogg</a></li>
		<li class="menu-item"><a href="#">Planlösning</a>
			<ol class="sub-menu">
				<li class="menu-item"><a href="#">Sovrum</a></li>
				<li class="menu-item"><a href="#">Vardagsrum</a></li>
				<li class="menu-item"><a href="#">Badrum</a></li>
			</ol>
		</li>
		<li class="menu-item"><a href="#">Hitta butik</a>
			<ol class="sub-menu">
				<li class="menu-item"><a href="#">Butikssökare</a></li>
				<li class="menu-item"><a href="#">Toppval</a></li>
				<li class="menu-item"><a href="#">Forum</a></li>
			</ol>
		</li>
		<li class="menu-item"><a href="#">Möt Steven Jung</a></li>
	</ol>
</nav>
    );
  }
}

export default Toolbar;