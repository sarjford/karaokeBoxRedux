import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'

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
      <div className='login-container'>
      <form className="enter-form" onSubmit={loginClicked}>
      <input id='userNameInput' className="form-control"
            placeholder="Please enter name"
            required />
      <input type='password' className="form-control"
            placeholder="Please enter Password"
            required />
          <button id='LoginButton' type="submit" className="btn btn-primary" onClick={this.loginClicked}>Enter</button>
      <button  id='signUpButton' className="btn btn-primary" onClick={signUpClicked}>Sign Up</button>
    </form>
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
