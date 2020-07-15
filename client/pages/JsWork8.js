import React from 'react';


class JsWork8 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };

    } 
  componentDidMount(){
    const slider = document.querySelector('.jswork8 .items');
    let isDown = false;
    let isMove = false;
    let startX;
    let scrollLeft;
    let walk;
    let startTime;
    let deltaV;
    let momentumWalk;
    slider.addEventListener('mousedown',(e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      clearInterval(momentumWalk);
    });
    slider.addEventListener('mouseup',() => {
      if(isDown){
        const walkTime = Date.now()-startTime+1;
        deltaV = (walk/walkTime)*0.5;
        
        momentumWalk = setInterval(()=>{
        slider.scrollLeft -= Math.round(deltaV);
        
        deltaV*=0.95;
        if(Math.round(deltaV)==0 || slider.scrollLeft + slider.clientWidth == slider.scrollWidth ||slider.scrollLeft == 0){
            clearInterval(momentumWalk);
          }
        },16);
      }
      isDown = false;
      isMove = false;
      slider.classList.remove('active');
      
    }); 
    slider.addEventListener('mousemove',(e) => {
      if(!isDown)return;
      startTime = Date.now();
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      walk = x- startX;
      slider.scrollLeft = scrollLeft - walk;
      
    });  
  }
  componentWillUnmount(){
    const slider = document.querySelector('.jswork8 .items');
    slider.removeEventListener('mousedown',(e)=>{});
    slider.removeEventListener('mouseup',(e)=>{});
    slider.removeEventListener('mousemove',(e)=>{});
  }

    
    render(){
        return (
            <div className="jswork8">
              <div className="items">
                <div className="item item1">01</div>
                <div className="item item2">02</div>
                <div className="item item3">03</div>
                <div className="item item4">04</div>
                <div className="item item5">05</div>
                <div className="item item6">06</div>
                <div className="item item7">07</div>
                <div className="item item8">08</div>
                <div className="item item9">09</div>
                <div className="item item10">10</div>
                <div className="item item11">11</div>
                <div className="item item12">12</div>
                <div className="item item13">13</div>
                <div className="item item14">14</div>
                <div className="item item15">15</div>
                <div className="item item16">16</div>
                <div className="item item17">17</div>
                <div className="item item18">18</div>
                <div className="item item19">19</div>
                <div className="item item20">20</div>
                <div className="item item21">21</div>
                <div className="item item22">22</div>
                <div className="item item23">23</div>
                <div className="item item24">24</div>
                <div className="item item25">25</div>
              </div>
            </div>
        );
    }
}

export default JsWork8;