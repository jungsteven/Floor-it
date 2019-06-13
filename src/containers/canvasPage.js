import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import Drag from '../components/Drag';
import { Stage, Layer, Text} from 'react-konva';

class CanvasPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: [],
      displayFurniture: true,
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    const clonedInventory = this.state.inventory.slice();
    clonedInventory.push(<Drag key={Math.floor(Math.random() * 100000)} zIndex={100} />);
    clonedInventory.push(<p>efefe</p>);
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
    return (
      <Fragment>
        <button onClick={this.onButtonClick}> Add Furniture </button>
          <Drag /><p>fuckof</p>
        <div className="canvas-page">
        <Drag />
        <Stage width={window.innerWidth} height={window.innerHeight}style={canvasStyle} ref="myCanvas"  >
          <Layer>
            <Text text='fefegfe'/>
            <Drag />
            <Drag />
          </Layer>
        </Stage>
            {/* Conditionally render furniture piece on button click */}
            {this.state.displayFurniture ? /*this.state.inventory*/null: null} 
            <Drag />
            <Drag />

        </div>
      </Fragment>
        
    );
  }
}

export default CanvasPage;