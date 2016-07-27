import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Video from './Video'


export default class mainGame extends Component {
  // getInitialState: function() {
  //   return {
  //     url: 'https://www.youtube.com/watch?v=-i5MU14JLdw',
  //     playing: false,
  //     volume: 0.0
  //   }
  // },
  // play: function(){
  //   this.setState({
  //     playing: true;
  //   })
  // },
  render() {
    return (
      <div id='PageTwo'>
        <h1>Karaoke</h1>
        <div id='chatBoxContainer'></div>
        <div id='mainFeaturesContainer'>
        <div id='videoLinkContainer'>
          <ReactPlayer />
          // <button onClick={this.play}>{'Play'}</button>
          // <Video />
        </div>
        <div id='waveLengthContainer'></div>
        <div id='peerFeatureContainer'></div>
        <button>Logout</button>
        </div>
      </div>
    )
  }
}
//
// var React = require('react');
// var Enter = require('./section/enter');
// var Toggle = require('./section/toggle');
// var Chatbox = require('./section/chatbox');
//
// var karaokeRoom = React.createClass({
// 	render() {
// 		// if provide singer name, navigate to karaoke room
// 		// else continue sign in
// 		return (
// 			<div className="toggle-container">
// 				<Toggle if={this.props.singer.name}>
// 					<div className="welcome-message">
// 						<h1>Hello! {this.props.singer.name}</h1>
// 						<p>Singer(s) in room: {this.props.singersInRoom.length}</p>
// 						<p>Get your mic ready!</p>
// 					</div>
// 					<Chatbox {...this.props}></Chatbox>
// 				</Toggle>
//
// 				<Toggle if={!this.props.singer.name}>
// 					<img className="logo" src="./images/KBLogoNoWord.png" />
// 					<Enter emit={this.props.emit}/>
// 				</Toggle>
// 			</div>
// 		)
// 	}
// })
//
// module.exports = karaokeRoom;
