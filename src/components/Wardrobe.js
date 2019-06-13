import React, { Component } from "react";
import Konva from "konva";
import { render } from "react-dom";
import { Stage, Layer, Shape } from "react-konva";
import { defaultCipherList } from "constants";

class Wardrobe extends Component {
  handleClick = (e, deg) => {
    console.log(e);
    e.target.rotate(deg);
    console.log(e);

  };
  render() {
    return (

          <Shape
            onClick={(e)=>this.handleClick(e, 45)}
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(0, 0);
              context.lineTo(0,40)
              context.lineTo(-10, 60);
              context.lineTo(10, 60);
              context.lineTo(20, 40);
              context.lineTo(60, 40);
              context.lineTo(70, 60);
              context.lineTo(90, 60);
              context.lineTo(80,40);
              context.lineTo(80, 0);
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            offsetX={45}
            offsetY={30}
            fill="blue"
            stroke="black"
            strokeWidth={1}
            draggable
          />

    );
  }
}

export default Wardrobe;