// import React, { Fragment, Component } from 'react';
// import Drag from './Drag';

// class Canvas extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//   }


//   render(){ 
//     let bw = 800;
//     let bh = 800;
//     let p = 10;
//     let canvas = document.getElementById("canvas");
//     let context = canvas.getContext("2d");
    
//     function drawBoard(){
//         for (let x = 0; x <= bw; x += 40) {
//             context.moveTo(0.5 + x + p, p);
//             context.lineTo(0.5 + x + p, bh + p);
//         }
    
//         for (let x = 0; x <= bh; x += 40) {
//             context.moveTo(p, 0.5 + x + p);
//             context.lineTo(bw + p, 0.5 + x + p);
//         }
//         context.strokeStyle = "blue";
//         context.stroke();
//     }
//     let grid = drawBoard();
//     return(
//       <Fragment>
//        {/* doesnt do anything */}
       
//       <Drag />
       
//       </Fragment>
//     );
//   }
// }
  
// export default Canvas;
