import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            route: '',
            changeRoute: (route) => this.setState({route}),
        };
    }
   render(){
       const headerStyles = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        marginTop: '75px',
        opacity: 0.95,
       }
       const styles = {
        width: '350px',
        height: '250px',
        padding: '20px',
        margin: '100px auto',
        // marginTop: '250px',
        boxShadow: '0px 0px 10px 2px grey'
       }
       const submitStyle = {
        fontFamily: "Roboto, sans-serif",
        textTransform: 'uppercase',
        outline: 0,
        background: '#0051BA',
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
       if(this.state.route !== '') return <Redirect to={this.state.route}/>
       return (
        <Fragment>
            <img src="https://fontmeme.com/permalink/190613/3ceff503b7fdbbdb4c0fbf5ededcf6a7.png" className="img-rotate-scale" style={headerStyles}/>
        <div className='login-wrap' style={styles}>               
            <input style={inputStyle} placeholder='Användarnamn' type='name'name='email'/>
            <input style={inputStyle} placeholder='Lösenord' type='password' name='password'/>
            <input onClick={()=>{this.state.changeRoute('/canvas')}} style={submitStyle} type="submit" value='Logga in'/>
            {/* <button onClick={()=>{this.state.changeRoute('/landing')}}>CLICK TO GO TO LANDING</button> */}
            <button onClick={()=>{this.state.changeRoute('/canvas')}}>CLICK TO GO TO CANDYLAND</button>
        </div>
        </Fragment>
       );
   }
}

export default SignIn;