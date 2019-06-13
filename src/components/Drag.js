import React, { Component } from 'react';
import Konva from "konva";
import { Stage, Layer, Rect } from 'react-konva';

class Drag extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isDragging: false,
      x: 100,
      y: 350,
      color: "grey",

    };
  }
  handleClick = (e) => {
    e.target.rotate(45);
    console.log(e);
    this.setState({

      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (

          <Rect
          style={{transform: [{rotate: '20deg'}]}}
            x={20}
            y={20}
            width={200}
            height={100}
            shadowBlur={3}
            onClick={(e)=>{this.handleClick(e)}}
            stroke={'#DCDCDC'}
            offsetX={100}
            offsetY={50}
            strokeWidth={2}
            draggable
            fill={this.state.isDragging ? 'crimson' : this.state.color} // COLOR CHANGER!
            onDragStart={() => {
              this.setState({
                isDragging: true
              });
            }}
            onDragEnd={e => {
              this.setState({
                isDragging: false,
                x: e.target.x(),
                y: e.target.y()
              });
            }}
          />

    );
  }
}

export default Drag;