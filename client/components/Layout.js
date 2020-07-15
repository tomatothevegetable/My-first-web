import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import JsWork1 from '../pages/JsWork1';
import JsWork2 from '../pages/JsWork2';
import JsWork3 from '../pages/JsWork3';
import JsWork4 from '../pages/JsWork4';
import JsWork5 from '../pages/JsWork5';
import JsWork6 from '../pages/JsWork6';
import JsWork7 from '../pages/JsWork7';
import JsWork8 from '../pages/JsWork8';
import JsWork9 from '../pages/JsWork9';
import JsWork10 from '../pages/JsWork10';
import Reduxstagram from '../pages/Reduxstagram'


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'ch'
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(lang) {
        this.setState({
            language: lang
        });
    }

    render() {
        if(process.env.NODE_ENV !== 'production'){
            console.log('Looks like we are in development mode!',process.env.NODE_ENV)
          }
        return (
            <div className="layout">
                <Header language={this.state.language} />
                <Navbar onLanguageChange={this.changeLanguage} language={this.state.language} />
                <Switch>
                    <Route path="/jswork1"><JsWork1 /></Route>
                    <Route path="/jswork2"><JsWork2 /></Route>
                    <Route path="/jswork3"><JsWork3 /></Route>
                    <Route path="/jswork4"><JsWork4 /></Route>
                    <Route path="/jswork5"><JsWork5 /></Route>
                    <Route path="/jswork6"><JsWork6 /></Route>
                    <Route path="/jswork7"><JsWork7 /></Route>
                    <Route path="/jswork8"><JsWork8 /></Route>
                    <Route path="/jswork9"><JsWork9 /></Route>
                    <Route path="/jswork10"><JsWork10 /></Route>
                    <Route path="/" component={Reduxstagram}></Route>
                </Switch>
            </div>
        );
    }
}

export default Layout;