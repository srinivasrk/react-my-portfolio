var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var {Router, IndexRoute, HashRouter, BrowserRouter,Route} = require('react-router-dom')
var Header = require('Header');
var createClass = require('create-react-class');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css');

//app css
require('style-loader!css-loader!sass-loader!applicationStyles');
$(document).foundation();



ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
