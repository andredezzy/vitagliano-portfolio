import React from 'react';

import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

const Routes = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
    </div>
);

export default Routes;
