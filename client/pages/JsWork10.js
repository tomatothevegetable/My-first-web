import React from 'react';


class JsWork10 extends React.Component{
  
    constructor(props) {
        super(props);
        this.state = {
        lastHole: Element,
        timeUp: false,
        score: 0
        };

        const holes = document.querySelectorAll('.hole');
        const scoreBoard = document.querySelector('.score');

        this.randomTime = this.randomTime.bind(this);
        this.randomHole = this.randomHole.bind(this);
        this.peep = this.peep.bind(this);
        this.startGame = this.startGame.bind(this);
        this.bonk = this.bonk.bind(this);
    } 

  
    randomTime(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }
  
    randomHole(holes) {
      const idx = Math.floor(Math.random() * holes.length);
      const hole = holes[idx];
      if (hole === this.state.lastHole) {
        console.log('Ah nah thats the same one bud');
        return this.randomHole(holes);
      }
      this.state.lastHole = hole;
      return hole;
    }
  
    peep() {
      const time = this.randomTime(200, 1000);
      const hole = this.randomHole(this.holes);
      hole.classList.add('up');
      setTimeout(() => {
        hole.classList.remove('up');
        if (!this.state.timeUp) this.peep();
      }, time);
    }
  
    startGame() {
      this.scoreBoard.textContent = 0;
      this.state.timeUp = false;
      this.setState({score:0});
      this.peep();
      setTimeout(() => this.setState({timeUp: true}), 10000)
    }
  
    bonk(e) {
      if(!e.isTrusted) return; // cheater!
      this.state.score++;
      e.target.parentNode.classList.remove('up');
      this.scoreBoard.textContent = this.state.score;
      this.setState({score: this.state.score});
    }
  
    
  
  componentDidMount(){
    const moles = document.querySelectorAll('.mole');
    this.holes = document.querySelectorAll('.hole');
    this.scoreBoard = document.querySelector('.score');
    moles.forEach(mole => mole.addEventListener('click', this.bonk));
  }
  componentWillUnmount(){
    const moles = document.querySelectorAll('.mole');
    moles.forEach(mole => mole.removeEventListener('click', this.bonk));
  }

    
    render(){
        return (
            <div className="jswork10">
              <h1>Whack-a-mole! <span className="score">0</span></h1>
              <button  className ="start-btn" onClick={this.startGame}>Start!</button>

              <div className="game">
                <div className="hole hole1">
                  <div className="mole"></div>
                </div>
                <div className="hole hole2">
                  <div className="mole"></div>
                </div>
                <div className="hole hole3">
                  <div className="mole"></div>
                </div>
                <div className="hole hole4">
                  <div className="mole"></div>
                </div>
                <div className="hole hole5">
                  <div className="mole"></div>
                </div>
                <div className="hole hole6">
                  <div className="mole"></div>
                </div>
              </div>
            </div>
        );
    }
}

export default JsWork10;