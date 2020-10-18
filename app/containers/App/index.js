/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';
import Counter from '../Counter';
import Github from '../Github';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - CME React" defaultTitle="CME React">
        <meta name="description" content="CME React.js Challenge" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={Github} />
        <Route exact path="/counter" component={Counter} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
