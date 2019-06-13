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
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (

          <Rect
            x={20}
            y={20}
            width={100}
            height={50}
            shadowBlur={3}
            zIndex={1000}
            onClick={this.handleClick}
            stroke={'#DCDCDC'}
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