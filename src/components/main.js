import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Projects from './projects';
import Contact from './contact';
import HomePage from './homepage';


const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route href="#projects-div" component={Projects} />
        <Route path="/contact" component={Contact} />
    </Switch>

)

export default Main;