import React from 'react';






class JsWork2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            suggestions:{},
            value: '',
            cities: [],
            matches: [],
            defaultValue: <ul>   
                <li>Filter for a city</li>
                <li>or a state</li>
            </ul>
        };
        const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
        
        fetch(endpoint)
        .then(blob => blob.json())
        .then(data => this.state.cities.push(...data));

        this.findMatches = this.findMatches.bind(this);
        this.displayMatches = this.displayMatches.bind(this);
        this.numberWithCommas = this.numberWithCommas.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.renderMatch = this.renderMatch.bind(this);
    }
    
    handleInput(e){
        e.preventDefault();
        this.setState({
            value: e.target.value,
            matches: this.findMatches()
         });
    }
    findMatches(){
      return this.state.cities.filter(place => {
        const regex = new RegExp(this.state.value,'gi');
        return place.city.match(regex) || place.state.match(regex);
      })
    }
    numberWithCommas(x){
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
    }
    renderMatch(place,i)
    {   
        const regex = new RegExp(this.state.value,'gi');
        const cityName = place.city.replace(regex,`<span class="hl">${this.state.value}</span>`);
        const stateName = place.state.replace(regex,`<span class="hl">${this.state.value}</span>`);
        return (
        <li key={i}>
            <span className="name">{place.city},{place.state}</span> 
            <span className="population">{this.numberWithCommas(place.population)}</span> 
        </li>)
    }
    displayMatches(e){
        e.preventDefault();
        
    }
    
    
    render(){
        return (
            <div className="jswork2">
                <form className="search-form">
                  <input type="text" className="search" placeholder="City or State" 
                  onChange={this.handleInput} onKeyUp={this.handleInput}/>
                  <ul className="suggestions">
                    {this.state.value==''? this.state.defaultValue : this.state.matches.map(this.renderMatch)}
                  </ul>
                </form>
            </div>
        );
    }
}

export default JsWork2;