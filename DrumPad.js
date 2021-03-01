import React from 'react';
import './DrumPad.css';
//import useSound from 'use-sound';



class DrumPad extends React.Component{

  handleClick = () => {
    return(
      this.playSound(this.props.source)
    );
  }

  render() {
    return(
      <div className = 'drum-pad' id = {this.props.name} onClick = {this.handleClick}>
        <p>{this.props.letter}</p>
        <audio
          className='clip'
          src={this.props.source}
          id = {this.props.id}>
        </audio>
      </div>
    )
  }
};

export default DrumPad;
