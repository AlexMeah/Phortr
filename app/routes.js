import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PhotoPage from './containers/PhotoPage';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/photos" component={PhotoPage} />
    </Route>
);
