import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Contact from './components/contact';


const NotFound = () => (
    <div>
        Not found
    </div>
);

const Routes = () => (
    <div>
        <BrowserRouter>      
            <div> 
            <Header></Header>     
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/portfolio/:id" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NotFound}/>
            </Switch>
            </div>
        </BrowserRouter>
    </div>
);

export default Routes;