import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';

import css from './styles/style.styl';

import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Photo from './components/Photo';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path='/view/:postId' component={Photo}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
