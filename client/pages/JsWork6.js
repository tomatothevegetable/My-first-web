import React from 'react';


class JsWork6 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          item:{
            text: "",
            done: false
          },
          items: [{
            text:"",
            done: false
          }],
          defaultItem: <li>Loading Tapas...</li>
        };
        this.addItem = this.addItem.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    
  addItem(e){
    e.preventDefault();
    const item = document.querySelector('input[name="item"]').value;
    this.state.item = {
      text: item,
      done: false
    };
    this.state.items = [...this.state.items,this.state.item];
    localStorage.setItem('items',JSON.stringify(this.state.items));
    this.setState({
      item: this.state.item,
      items:this.state.items
    });
  }
  removeItem(e){
    e.preventDefault();
    const i = e.target.dataset.index;
    this.state.items = [
      ...this.state.items.slice(0,i),
      ...this.state.items.slice(i+1)
    ],
    localStorage.setItem('items',JSON.stringify(this.state.items)),
    this.setState({
      items: this.state.items
    })
  }

  toggleDone(e){
    if(!e.target.matches('input'))return;
    const el = e.target;
    const index = el.dataset.index;
    this.state.items[index].done = !this.state.items[index].done;
    localStorage.setItem('items',JSON.stringify(this.state.items));
    this.setState({
      items: this.state.items
    })
  }
  renderItem(plate,i){
    return(
      <li key={i}>
        <input type="checkbox" data-index={i} checked = {plate.done} id={`item${i}`}/>
        <label htmlFor={`item${i}`}>{plate.text}</label>
        <button htmlFor={`item${i}`} data-index={i} onClick={this.removeItem.bind(this)}>X</button>
      </li>)
  }
  componentDidMount(){
    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const items = JSON.parse(localStorage.getItem('items')) || [];
    addItems.addEventListener('submit',this.addItem);
    itemsList.addEventListener('click',this.toggleDone);
    this.setState({
      items: items
    })
  }
  componentWillUnmount(){
     
  }

    
    render(){
        return (
            <div className="jswork6">
                <div className="wrapper">
                  <h2>LOCAL TAPAS</h2>
                  <p></p>
                  <ul className="plates">
                    {this.state.items.length==0?this.state.defaultItem:this.state.items.map(this.renderItem)}
                  </ul>
                  <form className="add-items">
                    <input type="text" name="item" placeholder="Item Name" required/>
                    <input type="submit" value="+ Add Item"/>
                  </form>
                </div>
            </div>
        );
    }
}

export default JsWork6;