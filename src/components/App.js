import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import Pad from './Pad.js'
const samples = [
  {
     label: 'Q',
     string: 'Chord-1',
     link: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
     icon: 'fab fa-itunes-note'
   }, 
  {
     label: 'W',
     string: 'Chord-2',
     link: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
     icon: 'fab fa-itunes-note'
   },
   {
     label: 'E',
     string: 'Chord-3',
     link: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
     icon: 'fab fa-itunes-note'
   },
   {
     label: 'A',
     string: 'Heater-6',
     link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
     icon: 'fas fa-compact-disc'
   },
   {
     label: 'S',
     string: 'Dry-Ohh',
     link: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
     icon: 'fas fa-compact-disc'
   },
   {
     label: 'D',
     string: 'Bld-H1',
     link: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
     icon: 'fas fa-compact-disc'
   },
   {
     label: 'Z',
     string: 'Brk-Snr',
     link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
     icon: 'fas fa-drum'
   },
   {
     label: 'X',
     string: 'Punchy-kick-1',
     link: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
     icon: 'fas fa-drum'
   },
   {
     label: 'C',
     string: 'Side-stick-1',
     link: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
     icon: 'fas fa-drum'
   }
];

function App() {
  return (
    <div className="container-fluid d-flex justify-content-center align-content-center">

       
          <div className="App col-xs-12 col-sm-6 col-md-4 rounded p-1 my-auto">
            
          <div id="display" className="display col-11 mx-auto my-2 rounded">
          Display
        </div>
        <div className="drum-buttons col-xs-12 row row-cols-4 m-auto rounded d-flex justify-content-center">
            {samples.map((item, idx) => (
               <Pad letter={item.label} key={idx} audio={item.link} str={item.string} symbol={item.icon} />
               ))}
        </div>
        </div>



    </div>
  );
}

export default App;
