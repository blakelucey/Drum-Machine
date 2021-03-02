import React from 'react';
import './DrumPad.css';
//import useSound from 'use-sound';


class DrumPad extends React.Component{

  handleClick = () => {
  const sound = document.querySelector(`#${this.props.id}`)
  sound.play()
}

  render() {
    return(
      <div className = 'drum-pad' id = {this.props.id} onClick = {this.handleClick}>
        <p>{this.props.letter}</p>
        <audio
          className='clip'
          src={this.props.src}
          id = {this.props.id}
          type='audio/mp3'
          >
        </audio>
      </div>
    )
  }
};

export default DrumPad;
