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
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
