var React = require('react');
var createClass = require('create-react-class');
var Header = require('Header');
var Home = require('Home');
var About = require('About');
var Projects = require('Projects');
var Details = require('Details');
import Foundation from 'react-foundation';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

var Main = createClass({
  render:function(){
    return (
      <HashRouter>
        <div>
          <Header />
            <Route path="/" component={Home} />
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/details" component={Details}/>

        </div>
      </HashRouter>
    );
  }
});

module.exports = Main;
