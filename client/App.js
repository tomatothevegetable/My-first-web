import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { history } from './store';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './store';
import './styles/App.scss';


const App = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Route path="/"component={Layout}></Route>
    </BrowserRouter>
  </Provider>
);


render(App, document.getElementById('root'));
