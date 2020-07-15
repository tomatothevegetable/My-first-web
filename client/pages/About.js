import React from 'react';
import introductions from '../data/introduction';

class About extends React.Component{ 
    render(){
        return (
            <div className="about">
                <p>
                    {introductions.bio[this.props.language]}
                </p>  
            </div>
        );
    }
}

export default About;