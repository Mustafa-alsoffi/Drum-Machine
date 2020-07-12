
import React, {Component} from 'react';


class Pad extends React.Component {
    constructor(props) {
      super(props);
      this.audio = React.createRef();
    }
  
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
    }
  
    handleKeyPress = (event) => {
      const id = event.key.toUpperCase();
      const audio = document.getElementById(id);
  
      if (audio && this.props.letter == id) {
        this.playSound();
        audio.classList.add("active");
        audio.onended = () => {
          audio.classList.remove("active");
        };
      }
    };
    playSound = () => {
      this.audio.current.currentTime = 0;
      this.audio.current.play();
  
      document.getElementById('display').innerText = this.props.str;
    };
  
    render() {
      const { letter, audio, str, symbol } = this.props;
      return (
        <div
          className="drum-pad btn btn-info rounded  m-2 d-flex row row-cols-1 p-0"
          type="button"
          onClick={this.playSound}
          id={`pad-${letter}`}
        >
          <div className="in-btn-up">{letter}</div>
          <div className="in-btn-down mb-0 rounded-bottom d-flex justify-content-center p-1">
            <i className={symbol}></i>
          </div>
          <audio
            ref={this.audio}
            src={audio}
            id={letter}
            name={str}
            className="clip"
          />
        </div>
      );
    }
  }
  

export default Pad;

