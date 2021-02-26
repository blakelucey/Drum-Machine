import React from 'react';
import './DrumPad.css';

class DrumPad extends React.Component{
  render() {
    return(
      <div className = 'drum-pad' id = {this.props.name}>
        <p>{this.props.key}</p>
        <audio
          className='clip'
          src={this.props.source}
          id = {this.props.key}>
        </audio>
      </div>
    )
  }
};

export default DrumPad;
