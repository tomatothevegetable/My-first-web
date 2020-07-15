import { createStore, compose} from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { createBrowserHistory} from 'history';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
    posts,comments
}

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__():f => f 
);

const store = createStore(rootReducer,defaultState,enhancers);

export const history = syncHistoryWithStore(createBrowserHistory(),store);

if(module.hot){
    module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
});
}

export default store;