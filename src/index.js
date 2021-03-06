import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router';

import { ApolloProvider } from 'react-apollo';
import client from './client';

import './index.css';

import Top from './Top';
import Random from './Random';
import HuskyList from './HuskyList';

import * as serviceWorker from './serviceWorker';

render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={Top} />
        <Route path="/random" component={Random} />
        <Route path="/husky" component={HuskyList} />
      </React.Fragment>
    </BrowserRouter>
  </ApolloProvider>
  ),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
