import React, { Component } from 'react';
import Konva from "konva";
import { Stage, Layer, Rect, Text } from 'react-konva';

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
  handleClick = (e, deg) => {
    console.log(e);
    e.target.rotate(deg);
    console.log(e);

  };
  render() {
    return (

          <Rect
          style={{transform: [{rotate: '20deg'}]}}
            x={120}
            y={90}
            width={this.props.width}
            height={this.props.height}
            shadowBlur={3}
            onClick={(e)=>{this.handleClick(e, 45)}}
            stroke={'#DCDCDC'}
            offsetX={this.props.width / 2}
            offsetY={this.props.height / 2}
            strokeWidth={2}
            draggable
            fill={this.state.isDragging ? 'crimson' : this.props.color} // COLOR CHANGER!
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
          ></Rect>
    );
  }
}

export default Drag;