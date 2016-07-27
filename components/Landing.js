import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router'
import { browserHistory } from 'react-router'

var isAuthenticated = true;

function signUpClicked(){
  browserHistory.push('/signup');
}

function loginClicked(){
  verifyUser()
  if(isAuthenticated){browserHistory.push('/game');}
  else {browserHistory.push('/signup');}
}

function verifyUser(){
    var data={
      username: $('#userNameInput').val(),
      password: $('#passwordInput').val(),
      };
      console.log(data);
    $.ajax({
            type: "POST",
            url: "/login",
            data: data,
          success: function(data)
          {
            isAuthenticated = data;
          }
      });


}

export default class Landing extends Component {
  render() {
    return (
      <div id = 'fullLandingContainer'>
        <div id='landingLogoContainer'>
          <div id='landingLogo'>
            <img src='../assets/images/KBLogoType.png'></img>
            <img src='../assets/images/KBLogoNoWord.png'></img>
          </div>
        </div>
        <div className='login-container'>
        <form className="enter-form" onSubmit={loginClicked}>
        <input id='userNameInput' className="form-control"
              placeholder="Please enter name"
              required />
            <input type='password' id='passwordInput' className="form-control"
              placeholder="Please enter Password"
              required />
            <button id='LoginButton' type="submit" className="btn btn-primary" onClick={this.loginClicked}>Enter</button>
        <button  id='signUpButton' className="btn btn-primary" onClick={signUpClicked}>Sign Up</button>
      </form>
      </div>
    </div>
    )
  }
}
