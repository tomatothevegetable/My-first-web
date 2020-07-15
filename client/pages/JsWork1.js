import React from 'react';


class JsWork1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            now: new Date(),
            secHandStyle: {transform:`rotate(0deg)`},
            hourHandStyle: {transform:`rotate(0deg)`},
            minHandStyle: {transform:`rotate(0deg)`},
        };
    }

    setDate(){
        const defaultTransistion =`all 0.2s cubic-bezier(0.1, 2.6, 0.58, 1)`;
        this.state.now = new Date();
        const sec = this.state.now.getSeconds();
        const secDegs = ((sec/60)*360)-90;
        

        const min = this.state.now.getMinutes();
        const minDegs = ((min/60)*360)-90;

        const hour = this.state.now.getHours();
        const hourDegs = ((hour/12)*360)-90;
        this.setState({ 
            secHandStyle: {
                transition: (secDegs == -90 ? `all 0s` : defaultTransistion),
                transform: `rotate(${secDegs}deg)`
        },
            minHandStyle: {
                transition: (minDegs == -90 ? `all 0s` : defaultTransistion),
                transform: `rotate(${minDegs}deg)`
        },
            hourHandStyle: {
                transition: (hourDegs == -90 ? `all 0s` : defaultTransistion),
                transform: `rotate(${hourDegs}deg)`}
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.setDate(),
            1000
          );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render(){
        return (
            <div className="jswork1">
                <div className="clock">
                  <div className="clock-face">
                    <div className="hand hour-hand" style={this.state.hourHandStyle}></div>
                    <div className="hand min-hand" style={this.state.minHandStyle}></div>
                    <div className="hand second-hand" style={this.state.secHandStyle}></div>
                  </div>
                </div>
            </div>
        );
    }
}

export default JsWork1;