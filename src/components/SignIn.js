import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            route: ''
        };
    }

   render(){
       const styles = {
        width: '300px',
        height: '200px',
        padding: '20px',
        margin: '100px auto',
        boxShadow: '0px 0px 10px 2px grey'
       }
       const submitStyle = {
        fontFamily: "Roboto, sans-serif",
        textTransform: 'uppercase',
        outline: 0,
        background: 'gold',
        width: '100%',
        border: 0,
        padding: '15px',
        color: '#FFFFFF',
        fontSize: '14px',
        Cursor: 'pointer',
       }
       const inputStyle = {
        outline: 0,
        background: '#f2f2f2',
        opacity: 0.78,
        width: '100%',
        border: 0,
        margin: '0 0 15px',
        padding: '15px',
        boxSizing: 'border-box',
        fontSize: '14px',
       }
       return (
        <div className='login-wrap' style={styles}>          
            <input style={inputStyle} placeholder='Username' type='name'name='email'/>
            <input style={inputStyle} placeholder='Password' type='password' name='password'/>
            <input style={submitStyle} type='submit' value='login'/>
            <button onClick={()=>{this.state.toggleChangePage('/canvas'); console.log(this.state)}}></button>
        </div>
       );
   }
}

export default SignIn;