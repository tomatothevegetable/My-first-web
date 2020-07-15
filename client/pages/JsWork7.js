import React from 'react';


class JsWork7 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
        const background = Element;
        const nav = Element;
        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }
    
  handleEnter(e){
    e.target.classList.add('trigger-enter');
    setTimeout(() =>
    e.target.classList.contains('trigger-enter') && e.target.classList.add('trigger-enter-active'),150);
    this.background.classList.add('open');
    const dropdown = e.target.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = this.nav.getBoundingClientRect();
    
    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left

    };
    this.background.style.setProperty('width',`${coords.width}px`);
    this.background.style.setProperty('height',`${coords.height}px`);
    this.background.style.setProperty('transform',`translate(${coords.left}px,${coords.top}px`);
  }
  
  handleLeave(e){
    e.target.classList.remove('trigger-enter','trigger-enter-active');
    this.background.classList.remove('open');
  }
    
  componentDidMount(){
    const triggers = document.querySelectorAll('.cool > li');
    this.background = document.querySelector('.dropdownBackground');
    this.nav = document.querySelector('.top');
    triggers.forEach(trigger =>trigger.addEventListener('mouseenter',this.handleEnter));
    triggers.forEach(trigger =>trigger.addEventListener('mouseleave',this.handleLeave));  
  }
  componentWillUnmount(){
    const triggers = document.querySelectorAll('.cool > li');
    triggers.forEach(trigger =>trigger.removeEventListener('mouseenter',this.handleEnter));
    triggers.forEach(trigger =>trigger.removeEventListener('mouseleave',this.handleLeave));  
  }

    
    render(){
        return (
            <div className="jswork7">
              <h2>Cool</h2>
              <nav className="top">
                <div className="dropdownBackground">
                  <span className="arrow"></span>
                </div>

                <ul className="cool">
                  <li>
                    <a href="#">About Me</a>
                    <div className="dropdown dropdown1">
                      <div className="bio">
                        <img src="https://logo.clearbit.com/wesbos.com"/>
                        <p>Wes Bos sure does love web development. He teaches things like JavaScript, CSS and BBQ. Wait. BBQ isn't part of web development. It should be though!</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">Courses</a>
                    <ul className="dropdown courses">
                      <li>
                        <span className="code">RFB</span>
                        <a href="https://ReactForBeginners.com">React For Beginners</a>
                      </li>
                      <li>
                        <span className="code">ES6</span>
                        <a href="https://ES6.io">ES6 For Everyone</a>
                      </li>
                      <li>
                        <span className="code">NODE</span>
                        <a href="https://LearnNode.com">Learn Node</a>
                      </li>
                      <li>
                        <span className="code">STPU</span>
                        <a href="https://SublimeTextBook.com">Sublime Text Power User</a>
                      </li>
                      <li>
                        <span className="code">WTF</span>
                        <a href="http://Flexbox.io">What The Flexbox?!</a>
                      </li>
                      <li>
                        <span className="code">GRID</span>
                        <a href="https://CSSGrid.io">CSS Grid</a>
                      </li>
                      <li>
                        <span className="code">LRX</span>
                        <a href="http://LearnRedux.com">Learn Redux</a>
                      </li>
                      <li>
                        <span className="code">CLPU</span>
                        <a href="http://CommandLinePowerUser.com">Command Line Power User</a>
                      </li>
                      <li>
                        <span className="code">MMD</span>
                        <a href="http://MasteringMarkdown.com">Mastering Markdown</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Other Links</a>
                    <ul className="dropdown dropdown3">
                      <li><a className="button" href="http://twitter.com/wesbos">Twitter</a></li>
                      <li><a className="button" href="http://facebook.com/wesbos.developer">Facebook</a></li>
                      <li><a className="button" href="http://wesbos.com">Blog</a></li>
                      <li><a className="button" href="http://wesbos.com/courses">Course Catalog</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>

            </div>
        );
    }
}

export default JsWork7;