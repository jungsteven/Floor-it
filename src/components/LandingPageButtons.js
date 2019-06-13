import React, { Component } from 'react';

class LandingPageButtons extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const containerStyles = {
            marginTop: '75px',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            fontSize: '16px',
            cursor: 'pointer',
            float: 'right',
            display: 'inline-block',
            marginRight: '60px',
           }    
        const btnStyle1 = {
            marginTop: '50px',
            marginLeft: '30px',
            width:'100%',
            padding:'16px 0',
            display:'block',
            position:'relative',
            color:'#0051BA',
            borderRadius:'4px',
            transition:'all .5s ease',
            transformStyle:'preserve-3d',
            fontFamily: 'caslon',
            fontWeight: 'bold',
            fontSize: '18px',
            backgroundColor: '#FFDA1A',
        }
        const btnStyle2 = {
            marginTop: '100px',
            marginLeft: '30px',
            width:'100%',
            padding:'16px 0',
            display:'block',
            position:'relative',
            color:'#0051BA',
            borderRadius:'4px',
            transition:'all .5s ease',
            transformStyle:'preserve-3d',
            fontFamily: 'caslon',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#FFDA1A',
        }
        const btnStyle3 = {
            marginTop: '100px',
            marginLeft: '30px',
            width:'100%',
            padding:'16px 0',
            display:'block',
            position:'relative',
            color:'#0051BA',
            borderRadius:'4px',
            transition:'all .5s ease',
            transformStyle:'preserve-3d',
            fontFamily: 'caslon',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#FFDA1A',
        }

        const searchStyle = {
            marginTop: '142px',
            marginLeft: '-515px',
            height: '36px',
            width: '400%',
            padding: '12px 20px',
            boxSizing: 'border-box',
            backgroundColor: 'lightblue',
        }
        return(
            <div className='container' style={containerStyles}>
             <div>
               <button id='btn' style={btnStyle1}>Ny planlösning</button>
               <br/>
             </div>
             <div>
               <button id='btn' style={btnStyle2}>Importera planlösning</button>
               <br/>
              </div>
              <div>
               <button id='btn' style={btnStyle3}>Ladda en planlösning</button>
               <br/>
              </div>
              <input type="text" placeholder="Sökmall" style={searchStyle}></input>
            </div>
        );
    }
}

export default LandingPageButtons;