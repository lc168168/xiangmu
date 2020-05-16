import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '@/pages/home'
import Three from '@/pages/three'
import Erjiluyou from '@/pages/erjiluyou'


export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/three" component={Three}/>
            <Route path="/erjiluyou" component={Erjiluyou}/>
            <Route path="/home" component={Home}/>
            <Route path="/" component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
