import React, { Component } from 'react';


class LandingPageButtons extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const styles = {
            marginTop: '5px',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            fontSize: '16px',
            cursor: 'pointer',
            float: 'right',
            display: 'inline-block',
           } 
           
         
        const btnStyle1 = {
            marginTop: '50px',
            marginLeft: '30px',
            width:'100%',
            padding:'16px 0',
            display:'block',
            position:'relative',
            color:'#000000',
            borderRadius:'4px',
            transition:'all .5s ease',
            transformStyle:'preserve-3d'
        }

        const btnStyle2 = {
            marginTop: '100px',
            marginLeft: '30px',
            width:'100%',
            padding:'16px 0',
            display:'block',
            position:'relative',
            color:'#000000',
            borderRadius:'4px',
            transition:'all .5s ease',
            transformStyle:'preserve-3d'
        }

        const btnStyle3 = {
            marginTop: '100px',
            marginLeft: '30px',
            width:'100%',
            padding:'16px 0',
            display:'block',
            position:'relative',
            color:'#000000',
            borderRadius:'4px',
            transition:'all .5s ease',
            transformStyle:'preserve-3d'
        }


        return(
            <div className='container' style={styles}>
             <div>
               <button id='btn' style={btnStyle1}>New Floor</button>
               <br/>
             </div>
             <div>
               <button id='btn' style={btnStyle2}>Import Floor</button>
               <br/>
              </div>
              <div>
               <button id='btn' style={btnStyle3}>Load Floor</button>
               <br/>
              </div>
            </div>
        );
    }
}

export default LandingPageButtons;