import React from 'react';
import {Image,Accordion,Card,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import introductions from '../data/introduction';

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <Link to="/" className="thumbContainer">
                    <Image  className="thumb" src={require("../media/B10415017-1.jpg")}/>
                </Link>
                <div className="info">
                    {introductions.intro[this.props.language]}
                </div>
            </div>
        );
    }
}

export default Header;