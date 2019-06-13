import React, { Component } from 'react';
// import TemplateList from '../components/PlaceholderOne.js';
import LandingPageButtons from '../components/PlaceholderTwo.js';
import TemplateList from '../components/TemplateList.js';
// import LandingPageButtons from '../components/LandingPageButtons.js';
import '../styles.css';

class LandingPage extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <span class='flex'>
        <TemplateList />
        <LandingPageButtons />
      </span>
    )
  }
}

export default LandingPage;