import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/vitagliano-portfolio/" component={Home} />
            <Route path="/vitagliano-portfolio/portfolio" component={Portfolio} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
