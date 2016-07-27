import React, {Component} from 'react';


export default class mainGame extends Component {
  render() {
    return (
      <div id='PageTwo'>
        <h1>Karaoke</h1>
        <div id='chatBoxContainer'></div>
        <div id='mainFeaturesContainer'>
          <div id='videoLinkContainer'></div>
          <div id='waveLengthContainer'></div>
          <div id='peerFeatureContainer'></div>
          <button>Logout</button>
        </div>
      </div>
    )
  }
}
