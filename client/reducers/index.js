import { combineReducer } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

export default const rootReducer = combineReducer({
  posts,
  comments,
  router: routerReducer
});
