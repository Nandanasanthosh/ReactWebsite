import React, { Component} from "react";

import Home from './Home';
import Contact from './Contact';
import About from './About';
import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom';

class Routing extends Component{
    render(){
        return(

            <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                </ul>
            </div>
            <Switch>
                <Route exact path={"/"}><Home/></Route>
                <Route path={"/About"}><About/></Route>
                <Route path={"/Contact"}><Contact/></Route>
            </Switch>
            </BrowserRouter>
        )
    }
    
}
export default Routing;