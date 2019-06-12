import React, { Component } from 'react';
import '../styles.css';

class Toolbar extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      // <div id='toolbar'>
      //   <p>{'TOOLBAR'}</p>
      // </div>
      <nav class="menu">
	<ol>
		<li class="menu-item"><a href="#0">Home</a></li>
		<li class="menu-item"><a href="#0">Blog</a></li>
		<li class="menu-item"><a href="#0">Floor Plans</a>
			<ol class="sub-menu">
				<li class="menu-item"><a href="#0">Bedroom</a></li>
				<li class="menu-item"><a href="#0">Living Room</a></li>
				<li class="menu-item"><a href="#0">Bathroom</a></li>
			</ol>
		</li>
		<li class="menu-item"><a href="#0">Find Stores</a>
			<ol class="sub-menu">
				<li class="menu-item"><a href="#0">Nearest Location</a></li>
				<li class="menu-item"><a href="#0">Our Top Picks</a></li>
				<li class="menu-item"><a href="#0">Forum</a></li>
			</ol>
		</li>
		<li class="menu-item"><a href="#0">Meet Steven Jung</a></li>
	</ol>
</nav>
    );
  }
}

export default Toolbar;