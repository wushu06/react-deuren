import React, { Component } from 'react';
import {Route, browserHistroy} from 'react-router'
import Users from './component/Users/Users'
import Profile from './component/Profile/Profile'
import Posts from './component/WP/Posts/Posts'
import Pages from './component/WP/Pages/Pages'
import PageSingle from './component/WP/Pages/Single/Single'
import PostSingle from './component/WP/Posts/Single'

import PostInternal from './component/WP/CP/Internal/SingleInternalV2'
import Test from './component/WP/CP/Internal/Test'
import ArchiveInternal from './component/WP/CP/Internal/ArchiveStyles'
import PageInteranl from './component/WP/CP/Internal/PageInternal'
import InternalWoods from './component/WP/CP/Internal/InternalWoods'
import InternalStyles from './component/WP/CP/Internal/InternalStyles'

import Home from './component/Home/Home'
import Header from './component/Header/Header'
import './assets/App.scss';
import AllWoods from './component/WP/CP/Internal/ArchiveWoods'
import AllStyles from './component/WP/CP/Internal/ArchiveStyles'


class App extends Component {
  render() {
    return (
      <div className="App">




        <Route path="/" exact component={PageInteranl}/>
        <Route path="/users" component={Users}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/pages" component={Pages}/>



          <Route path="/test" component={Test}/>
        <Route path="/page-internal" component={PageInteranl}/>
        <Route path="/single-internal/:style/:wood" component={PostInternal}/>
        <Route path="/archive-internal/:slug" component={ArchiveInternal}/>
        <Route path="/internal-woods/:slug" component={InternalWoods}/>
        <Route path="/internal-styles/:slug" component={InternalStyles}/>



        <Route path="/page-single/:id" component={PageSingle}/>
        <Route path="/post-single/:id" component={PostSingle}/>
      </div>
    );
  }
}

export default App;
