import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './homepage';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';
import AboutMe from './aboutme';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/aboutme" component={AboutMe} />
    </Switch>
)

export default Main;