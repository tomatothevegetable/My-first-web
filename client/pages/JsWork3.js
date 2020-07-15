import React from 'react';


class JsWork3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
        this.removeTransition = this.removeTransition.bind(this);
        this.playSound = this.playSound.bind(this);
    }
    
    playSound(e){
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return;
        audio.currentTime = 0;
        const audioPromise = audio.play();
        if(audioPromise !== undefined){
          audioPromise.then(function(){      
          }).catch(function(error){
          })
        }
        key.classList.add('playing');
          
    }
      
    removeTransition(e){
        e.preventDefault();
        if(e.type=='keyup'){
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            key==null?null:key.classList.remove('playing');
        }
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }
    componentDidMount(){
      window.document.addEventListener("keydown",this.playSound);
    }
    componentWillUnmount(){
      window.document.removeEventListener("keydown",this.playSound);
    }
    
    render(){
        return (
            <div className="jswork3"  onTransitionEnd={this.removeTransition} onKeyUp={this.removeTransition}>
                <div className="keys" >
                    <div data-key="65" className="key" >
                      <kbd>A</kbd>
                      <span className="sound">clap</span>
                    </div>
                    <div data-key="83" className="key" >
                      <kbd>S</kbd>
                      <span className="sound">hihat</span>
                    </div>
                    <div data-key="68" className="key" >
                      <kbd>D</kbd>
                      <span className="sound">kick</span>
                    </div>
                    <div data-key="70" className="key" >
                      <kbd>F</kbd>
                      <span className="sound">openhat</span>
                    </div>
                    <div data-key="71" className="key" >
                      <kbd>G</kbd>
                      <span className="sound">boom</span>
                    </div>
                    <div data-key="72" className="key" >
                      <kbd>H</kbd>
                      <span className="sound">ride</span>
                    </div>
                    <div data-key="74" className="key" >
                      <kbd>J</kbd>
                      <span className="sound">snare</span>
                    </div>
                    <div data-key="75" className="key" >
                      <kbd>K</kbd>
                      <span className="sound">tom</span>
                    </div>
                    <div data-key="76" className="key" >
                      <kbd>L</kbd>
                      <span className="sound">tink</span>
                    </div>
                </div>

                <audio data-key="65" src={require('../media/sounds/clap.wav')}></audio>
                <audio data-key="83" src={require('../media/sounds/Hihat.wav')}></audio>
                <audio data-key="68" src={require('../media/sounds/Kick.wav')}></audio>
                <audio data-key="70" src={require('../media/sounds/Openhat.wav')}></audio>
                <audio data-key="71" src={require('../media/sounds/Boom.wav')}></audio>
                <audio data-key="72" src={require('../media/sounds/Ride.wav')}></audio>
                <audio data-key="74" src={require('../media/sounds/Snare.wav')}></audio>
                <audio data-key="75" src={require('../media/sounds/Tom.wav')}></audio>
                <audio data-key="76" src={require('../media/sounds/Tink.wav')}></audio>
            </div>
        );
    }
}

export default JsWork3;