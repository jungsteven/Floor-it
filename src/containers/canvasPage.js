import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import Drag from '../components/Drag';

class CanvasPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayFurniture: false,
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState({
      displayFurniture: true,
    });
  }
  componentDidMount() {
      let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
      let ctx = canvas.getContext('2d');
      let bw = 1600;
      let bh = 1600;
      let p = -12;

      function drawBoard(){
        for (let x = 0; x <= bw; x += 80) {
            ctx.moveTo(0.5 + x + p, p);
            ctx.lineTo(0.5 + x + p, bh + p);
        }
        for (let x = 0; x <= bh; x += 80) {
            ctx.moveTo(p, 0.5 + x + p);
            ctx.lineTo(bw + p, 0.5 + x + p);
        }
        ctx.strokeStyle = "blue";
        ctx.globalAlpha = 0.25;
        ctx.stroke();
    }
      drawBoard();
  }
  render() {
    const canvasStyle = {
      position: 'absolute',
      width: '1200px',
      height: '800px',
      left: '50%',
      top: '50%',
      marginLeft: '-600px',
      marginTop: '-400px',
      backgroundImage: 'url("https://i.imgur.com/wvKRoKy.png")',
      opacity: 0.75,
    }

    return (
      <Fragment>
        <button onClick={this.onButtonClick}> Add Furniture </button>
        <div className="canvas-page">
            <canvas style={canvasStyle} ref="myCanvas" width="1580px" height="1580px" />
            {/* Conditionally render furniture piece on button click */}
            {this.state.displayFurniture ? <Drag />: null} 
            {/* <Drag /> */}
        </div>
      </Fragment>
        
    );
  }
}

export default CanvasPage;