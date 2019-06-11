import React, { Component } from 'react';
import { Stage, Layer, Rect, Group, Star, Text } from 'react-konva';

class Drag extends Component {
  state = {
    isDragging: false,
    x: 50,
    y: 50
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={this.state.x}
            y={this.state.y}
            width={100}
            height={50}
            fill={'green'}
            stroke={'black'}
            strokeWidth={4}
            draggable
            fill={this.state.isDragging ? 'red' : 'green'}
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
        </Layer>
      </Stage>
    );
  }
}

export default Drag;