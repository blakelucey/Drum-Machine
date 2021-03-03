import React from 'react';
import './DrumPad.css';
//import useSound from 'use-sound';


class DrumPad extends React.Component{

//Define handleClick
  handleClick = () => {
  const sound = document.querySelector(`#${this.props.letter}`)
  sound.play()
}

//Define componentDidMount and handleKeyPress
componentDidMount() {
    document.addEventListener("keydown", (e) => {
      const sound = document.querySelector(`#${e.key.toUpperCase()}`);
      sound && sound.play();
    });
}

  render() {
    return(
      <div className = 'drum-pad'  id = {this.props.id}  onClick = {this.handleClick}>
        <p>{this.props.letter}</p>
        <audio
          className='clip'
          src={this.props.src}
          id = {this.props.letter}
          type='audio/mp3'
          >
        </audio>
      </div>
    )
  }
};

export default DrumPad;
