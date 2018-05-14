import React, { Component } from 'react';
import {Route, Router, browserHistroy} from 'react-router'
import Users from './component/Users/Users'
import Profile from './component/Profile/Profile'
import Posts from './component/WP/Posts/Posts'
import Pages from './component/WP/Pages/Pages'
import PageSingle from './component/WP/Pages/Single/Single'
import PostSingle from './component/WP/Posts/Single'

import PostInternal from './component/WP/CP/Internal/SingleInternalV2'
import ArchiveInternal from './component/WP/CP/Internal/ArchiveStyles'
import PageInteranl from './component/WP/CP/Internal/PageInternal'
import InternalWoods from './component/WP/CP/Internal/InternalWoods'
import InternalStyles from './component/WP/CP/Internal/InternalStyles'
import createHistory from 'history/createBrowserHistory'
import Home from './component/Home/Home'
import Header from './component/Header/Header'
import './assets/App.scss';
import AllWoods from './component/WP/CP/Internal/ArchiveWoods'
import AllStyles from './component/WP/CP/Internal/ArchiveStyles'

class App extends Component {
  render() {
    return (
      <div className="App">


             <Route path={`${process.env.PUBLIC_URL}/`} exact component={PageInteranl}/>

      </div>
    );
  }
}

export default App;
