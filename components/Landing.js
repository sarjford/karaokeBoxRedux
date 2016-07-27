import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'
// import { Button } from 'react-bootstrap';

var isAuthenticated = true;

function signUpClicked(){
  browserHistory.push('/signup');
}

function loginClicked(e){
  e.preventDefault();
  verifyUser()
  if(isAuthenticated){browserHistory.push('/game');}
  else {browserHistory.push('/signup');}
}

function verifyUser(){
      //if($('#passWordLogin').val()) === 'password'){ isAuthenticated===true;}
      console.log(document.getElementById('userNameInput').value);
}

export default class Landing extends Component {
  render() {
    return (
      <div className='main'>
      <img className="logo" src="./images/KBLogo.png" />
      <div className='well login-container'>
      <div className='login-header'>LOG IN</div>
      <form className="enter-form" onSubmit={loginClicked}>
      <input id='userNameInput' className="form-control"
            placeholder="Username"
            required />
      <input type='password' className="form-control"
            placeholder="Password"
            required />
          <button id='LoginButton' type="submit" className="btn" onClick={this.loginClicked}>ENTER</button>
      <button id='signUpButton' className="btn" onClick={signUpClicked}>SIGN UP</button>
    </form>
    </div>
  </div>
      // <div id='LoginContainer'>
      //   <div id='LoginBox'>
      //     <h1>Sign in</h1>
      //     <input id='userNameLogin' type='text' placeholder='Singer Name'></input>
      //     <input id='passWordLogin' type='password' placeholder='Password'></input>
      //     <div id='signUpButton' onClick={signUpClicked} >Sign Up</div>
      //     <div id='logInButton' onClick={signUpClicked}>Log in</div>
      //   </div>
      //
      //
      // </div>
    )
  }
}
