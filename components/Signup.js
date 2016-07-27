import React, {Component} from 'react';
import { browserHistory } from 'react-router'


function handlelogInButtonClick(){
  browserHistory.push('/');
}

function handleSignUpButtonClick(){
  if($('#passWordConfirm').val() === $('#passWordSignup').val()){
  var data={
    username: $('#userNameSignup').val(),
    password: $('#passWordConfirm').val(),
    };
  $.ajax({
          type: "POST",
          url: "/signup",
          data: data,
        success: function()
        {
          browserHistory.push('/game');
        }
    });
  }
}

export default class Signup extends Component {
  render() {
    return (
        <div id='signUpContainer'>
          <div id='signUpBox'>
            <h1>Sign up!</h1>
            <input id='userNameSignup'  type='text' placeholder='Singer Name'></input>
            <input id='passWordSignup' type='password' placeholder='Password'></input>
            <input id='passWordConfirm' type='password' placeholder='Confirm Password'></input>
            <div id='signUpButton' onClick={handleSignUpButtonClick}>Sign Up</div>
            <div id='logInButton' onClick={handlelogInButtonClick}>I already have an account</div>
          </div>
        </div>
    )
  }
}
