import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import Drag from '../components/Drag';
import { Stage, Layer, Text} from 'react-konva';
import Sidebar from '../components/Sidebar';
import '../styles.css';
import Wardrobe from '../components/Wardrobe.js';

class CanvasPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: [],
      displayFurniture: true,
    }
    this.onButtonClick = this.onButtonClick.bind(this);
    this.renderWardrobe = this.renderWardrobe.bind(this);
  }
  renderWardrobe(){
    const clonedInventory = this.state.inventory.slice();
    clonedInventory.push(<Wardrobe />);
    this.setState({
      displayFurniture: true,
      inventory: clonedInventory
    })
  }
  onButtonClick(w, h, color) {
    const clonedInventory = this.state.inventory.slice();
    clonedInventory.push(<Drag  width={w} height={h} color={color}/>);
    console.log('cloned inven', clonedInventory);
    console.log('real inven', this.state.inventory);
    this.setState({
      displayFurniture: true,
      inventory: clonedInventory,
    });
  }
  componentDidMount() {
      // let canvas = ReactDOM.findDOMNode(this.refs.myCanvas);
      // let ctx = canvas.getContext('2d');
      // let bw = 1600;
      // let bh = 1600;
      // let p = -12;

      // function drawBoard(){
      //   for (let x = 0; x <= bw; x += 80) {
      //       ctx.moveTo(0.5 + x + p, p);
      //       ctx.lineTo(0.5 + x + p, bh + p);
      //   }
      //   for (let x = 0; x <= bh; x += 80) {
      //       ctx.moveTo(p, 0.5 + x + p);
      //       ctx.lineTo(bw + p, 0.5 + x + p);
      //   }
      //   ctx.strokeStyle = "blue";
      //   ctx.globalAlpha = 0.25;
      //   ctx.stroke();
    }
      // drawBoard();

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
    const hStyle = {
      color: 'red',
      textAlign: 'center',
      backgroundColor: 'red',
      position: 'fixed',
      top: '25%',
      left: '5.75%',
    }
    const saveButton = {
      border: 'none',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      position: 'fixed',
      fontSize: '16px',
      height: '50px',
      margin: '0 auto',
      top: '0px',
      left: '3.5%',
      position:'absolute',
      transition:'all .5s ease',
      transformStyle:'preserve-3d',
      fontFamily: 'caslon',
      fontSize: '18px',
      backgroundColor: 'black',
      color: '#fff',
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      opacity: 0.85,
    }
    return (
      <Fragment>
        <Sidebar renderWardrobe={this.renderWardrobe} onButtonClick={this.onButtonClick} />
        <div className="canvas-page">
        <Stage width={window.innerWidth} height={window.innerHeight}style={canvasStyle} ref="myCanvas"  >
          <Layer>
            {/* <Text text='fefegfe'/> */}
            <Drag />
            <Drag />
            {this.state.inventory}
          </Layer>
        </Stage>
            {/* Conditionally render furniture piece on button click */}
            {this.state.displayFurniture ? /*this.state.inventory*/null: null} 
            <button style={saveButton}>Exportera som bild</button>
        </div>
      </Fragment>
        
    );
  }
}

export default CanvasPage;