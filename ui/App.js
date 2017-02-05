import React from 'react';
import {render} from 'react-dom'
import {browserHistory, Router, Route, IndexRoute} from 'react-router'
import routes from './config/routes.js'

render((
    <Router history={browserHistory}>
        {routes}
    </Router>
), document.getElementById('root'))
