import React, { Component } from 'react';
import { Rect } from 'react-konva';

class Drag extends Component {
  constructor(props, state) {
    super(props, state)
    this.state = {
      isDragging: false,
      x: 100,
      y: 350,
      color: "grey",
    };
  }
  handleClick = (e, deg) => {
    e.target.rotate(deg);
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
              this.props.pullCoords(e, this.props.id)
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