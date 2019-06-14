import React, { Component } from 'react';
import Konva from "konva";
import { Circle } from 'react-konva';

class Vase extends Component {
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

          <Circle
          style={{transform: [{rotate: '20deg'}]}}
            x={this.props.x}
            y={this.props.y}
            width={50}
            height={50}
            shadowBlur={3}
            onClick={(e)=>{this.handleClick(e, 45)}}
            stroke={'#DCDCDC'}
            offsetX={25}
            offsetY={25}
            strokeWidth={2}
            draggable
            fill={this.state.isDragging ? 'crimson' : 'orange'} // COLOR CHANGER!
            onDragStart={() => {
              this.setState({
                isDragging: true
              });
            }}
            onDragEnd={e => {
              this.props.pullCoords(e, this.props.id)
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

export default Vase;