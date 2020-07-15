import React from 'react';
import {Link,Switch,Route} from 'react-router-dom';
import { cloneElement } from 'react';
import PhotoGrid from './PhotoGrid'
import Single from './Single'

class Main extends React.Component{
    componentDidMount(){
 
    }
    render(){
        return(
            <div className="reduxstagram">
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                <Switch>
                    <Route exact path='/'>{cloneElement(<PhotoGrid/>,this.props)}</Route>
                    <Route path='/view/:postId' render={({match})=><Single {...this.props} match={match}/>}></Route>
                </Switch>
            </div>
        )
    }
}

export default Main;