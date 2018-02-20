var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
var {Menu, MenuItem, Column, Thumbnail, Row,isColumn} = require('react-foundation');
import Sticky from 'react-stickynode';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

var Header = createClass({
  render: function(){

    return(
      <div className="custom_nav">
        <Sticky enabled={true} top={0}>
          <div className="menu-active-state-example expanded text-center">
            <Menu className="sticky">
                <MenuItem className="columns small-3" ><NavLink to="/home">Home</NavLink></MenuItem>
                <MenuItem className="columns small-3" ><NavLink to="/about">About</NavLink></MenuItem>
                <MenuItem className="columns small-3" ><NavLink to="/projects">Projects</NavLink></MenuItem>
                <MenuItem className="columns small-3" ><NavLink to="/details">More Details</NavLink></MenuItem>
            </Menu>
          </div>
        </Sticky>
      </div>
    );
  }
});

module.exports = Header;
