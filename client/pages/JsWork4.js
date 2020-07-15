import React from 'react';


class JsWork4 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         
        };
        this.toggleOpen = this.toggleOpen.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
    }
     
    toggleOpen(e){
      if(e.currentTarget.classList.contains('panel'))
      e.currentTarget.classList.toggle('open');
    }
    
    toggleActive(e){
      if(e.propertyName.includes("flex")){
        e.target.classList.toggle('open-active');
      }
    }
    

    
    render(){
        return (
            <div className="jswork4">
              <div className="panels">
                <div className="panel panel1" onClickCapture={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                  <p>Hey</p>
                  <p>Let's</p>
                  <p>Dance</p>
                </div>
                <div className="panel panel2" onClickCapture={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                  <p>Give</p>
                  <p>Take</p>
                  <p>Receive</p>
                </div>
                <div className="panel panel3" onClickCapture={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                  <p>Experience</p>
                  <p>It</p>
                  <p>Today</p>
                </div>
                <div className="panel panel4" onClickCapture={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                  <p>Give</p>
                  <p>All</p>
                  <p>You can</p>
                </div>
                <div className="panel panel5" onClickCapture={this.toggleOpen} onTransitionEnd={this.toggleActive}>
                  <p>Life</p>
                  <p>In</p>
                  <p>Motion</p>
                </div>
              </div>
            </div>
        );
    }
}

export default JsWork4;