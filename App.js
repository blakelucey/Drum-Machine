import './App.css';
import DrumPad from './DrumPad.js';
import React from 'react';

const Sounds = [{
  name: 'Cowbell',
  source: 'dight310.byu.edu/media/audio/.../Cowbell Wav Sound-22317-Free-Loops.com.mp3',
  keycode: 81,
  key: 'Q',
},
{
  name: 'Bongos',
  source: 'dight310.byu.edu/media/audio/FreeLo.../Bongo Loop 4-9270-Free-Loops.com.mp3',
  keycode: 87,
  key: 'W',
},
{
  name: 'Rimshot',
  source: 'emmanuelprot.free.fr/Drums kit Manu/Rimshot.wav',
  keycode: 69,
  key: 'E'
},
{
  name: 'Kazoo',
  source: 'www.freesoundvault.com/sounds/sound_fx/FX_kazoo_1.wav',
  keycode: 65,
  key: 'A'
},
{
  name: 'Snare',
  source: 'bigsamples.free.fr/d_kit/snare/lg_snare.wav',
  keycode: 83,
  key: 'S'
},
{
  name: 'High Hat',
  source: 'bigsamples.free.fr/d_kit/hithat/hh2.wav',
  keycode: 68,
  key: 'D'
},
{
  name: 'Ride',
  source: 'www.burnkit2600.com/temp/HR-16/HR-16-WAVs/30-ride cymbal bell.wav',
  keycode: 90,
  key: 'Z'
},
{
name: 'Ukulele',
source: 'musicweb.ucsd.edu/~terbe/172/uke3.wav',
keycode: 88,
key: 'X'
},
{
  name: 'Timbale',
  source: 'emmanuelprot.free.fr/Drums kit Manu/Low timbale.wav',
  keycode: 67,
  key: 'C'
}];

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      currentSoundId : '',
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  //Define Component Did Mount, Component Will Unmount & playSound//
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  playSound() {
    document.getElementById(this.state.currentSoundId).play();
  }


  //Define handleClick, handleKeyPress & playSound//

handleKeyPress(event) {
  const key = Sounds[event.key.keycode];

  const isValidKey = Object.keys(Sounds).includes(key);
  this.setState({currentSoundId: (isValidKey)? key: ''});
}

handleClick(event) {
  this.setState({currentSoundId: event.target.children[0].id });
}


  render(){
    let message = 'No sound';
    if (this.state.currentSoundId) {
      message = `Sound: ${Sounds.name.key[this.state.currentSoundId]}`;
      this.playSound();
    }
  return (
    <div id='drum-machine'>
    <div id='container'>
    <div id='display'>{message}</div>
    {
      Object.keys(Sounds).map(s => (
      <DrumPad
        id = {s.name}
        letter={s.key}
        source={s.source}
        />
    ))}

    </div>
    </div>
  );
}
}
export default App;
