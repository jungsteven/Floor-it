import React, { Component } from 'react';
// import TemplateList from '../components/PlaceholderOne.js';
//import LandingPageButtons from '../components/PlaceholderTwo.js';
import TemplateList from '../components/TemplateList.js';
<<<<<<< HEAD
import LandingPageButtons from '../components/LandingPageButtons.js';

=======
// import LandingPageButtons from '../components/LandingPageButtons.js';
>>>>>>> 98bb4c5bd31af56150f95408eb3344a4f636a1cd
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