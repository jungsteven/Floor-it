import React, { Component, Fragment } from 'react';
import '../styles.css';

class Sidebar extends Component{
    constructor(props){
        super(props)
        this.state = {
          img: ['https://www.tipeeestream.com/bundles/widget/images/animation/trumpetcat.gif'],
        };
        this.onClicky = this.onClicky.bind(this);
    }

    onClicky = () => {
      this.setState(state => ({ open: !state.open }))
    }
   render(){
    const imageStyle = {
      marginLeft: '260px',
    }
    let array = ["meow"];

    let images = array.map(image => {
       return <img key={image} src={'https://www.tipeeestream.com/bundles/widget/images/animation/trumpetcat.gif'} alt="" className="img-responsive" />
    });

    //https://i.gifer.com/6kt.gif

       return (
         <Fragment>
           <nav className="side-bar">
              <ul className="side-ul">
                <li className="side-li" onClick={()=>{this.props.onButtonClick(175,75,'red')}} ><p>Bed<span className="spam" ><i className="fas fa-cat"></i></span></p></li>
                <li className="side-li" onClick={()=>{this.props.renderVase()}}><p>Vase<span className="spam"><i className="fas fa-cat"></i></span> </p></li>
                <li className="side-li" onClick={()=>{this.props.onButtonClick(200,100,'#FFDA1A')}} ><p>Couch<span className="spam"><i className="fas fa-cat"></i></span> </p></li>
                <li className="side-li"onClick={()=>{this.props.onButtonClick(25,200,'green')}} ><p>TV<span className="spam"><i className="fas fa-cat"></i></span> </p></li>
                <li className="side-li" onClick={()=>{this.props.renderWardrobe()}}><p>Wardrobe<span className="spam"><i className="fas fa-cat"></i></span> </p></li>
                <li className="side-li" onClick={this.onClicky}><p>Meow<span className="spam"><i className="fas fa-cat"></i></span> </p></li>
              </ul>
              <div style={imageStyle}>
              {images}
              </div>
            </nav>
         </Fragment>
       );
   }
}

export default Sidebar;