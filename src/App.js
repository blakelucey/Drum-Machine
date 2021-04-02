import './App.css';
import DrumPad from './DrumPad.js';
import React from 'react';
import Display from './Display.js';

const Sounds = [{
  name: 'Heater-1',
  source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  keycode: 81,
  key: 'Q',
},
{
  name: 'Heater-2',
  source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  keycode: 87,
  key: 'W',
},
{
  name: 'Heater-3',
  source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  keycode: 69,
  key: 'E'
},
{
  name: 'Heater-4',
  source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  keycode: 65,
  key: 'A'
},
{
  name: 'Heater-6',
  source: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  keycode: 83,
  key: 'S'
},
{
  name: 'Dsc-Oh',
  source: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  keycode: 68,
  key: 'D'
},
{
  name: 'Kick_n_Hat',
  source: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  keycode: 90,
  key: 'Z'
},
{
name: 'RP4_KICK_1',
source: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
keycode: 88,
key: 'X'
},
{
  name: 'Cev_H2',
  source: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  keycode: 67,
  key: 'C'
}];

class App extends React.Component  {
  constructor(props){
    super(props)
    this.state = {
      message: 'No sound'
    }
  }
  setMessage = (message) => this.setState({message});

  render(){

  return (
    <div id='drum-machine'>
    <div id='container'>

    {
      Sounds.map(s => (
      <DrumPad
        id = {s.name}
        letter={s.key}
        src={s.source}
        setMessage={this.setMessage}

        />
    ))}
<Display currentSoundText={this.state.message} />
    </div>
    </div>

  );
}
}
export default App;
