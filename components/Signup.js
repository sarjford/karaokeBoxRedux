import React, {Component} from 'react';
import { browserHistory } from 'react-router'


function handlelogInButtonClick(){
  browserHistory.push('/');
}

function handleSignUpButtonClick(){

  var formData = (({
      'username': document.getElementById('userNameSignup').value,
      'password': document.getElementById('passWordConfirm').value
  }))
  console.log(formData);
  $.ajax({
      async: false,
      cache: false,
      type: 'post',
      //dataType: 'application/json',  // json...just for example sake
      data: formData,
      url: 'http://localhost:3000/signup',
      success: function (data) {
          // retrieve a success/failure code from the server
          if (data === '1') {  // server returns a "1" for success
              // success!
              console.log('successful signup')
              // do whatever you need to do
          } else {
              // fail!
              console.log('failed signup')
          }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
          // something went wrong with the request
          console.log(XMLHttpRequest.responseText);
      }

  });


}

export default class Signup extends Component {
  render() {
    return (
        <div id='signUpContainer'>
          <div id='signUpBox'>
            <h1>Sign up!</h1>
            <input id='userNameSignup' ref='user' type='text' placeholder='Singer Name'></input>
            <input id='passWordSignup' type='password' placeholder='Password'></input>
            <input id='passWordConfirm' type='password' placeholder='Confirm Password'></input>
            <div id='signUpButton' onClick={handleSignUpButtonClick}>Sign Up</div>
            <div id='logInButton' onClick={handlelogInButtonClick}>I already have an account</div>
          </div>


        </div>
    )
  }
}
