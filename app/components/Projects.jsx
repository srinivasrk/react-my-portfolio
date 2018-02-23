var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
var {Menu, MenuItem, Column, Thumbnail,Column, Row,isColumn} = require('react-foundation');
import ProjectImage from './project_background.png';
import WebApp from './web-app.png';
var Projects = createClass({
  render:function(){
    return(
      <div className="carousel_container">
        <img className="about_container" src ={ProjectImage} />
        <div className="project_container">
          <Row className="display project_item">
          <Column small={3} large={3}>  <img className="project_icon" src = {WebApp} /> </Column>
          <Column small={9} large={9} className="project_desc">  <p className="project_title"> PS Dashboard</p> </Column>
          </Row>
          <hr />
            <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {WebApp} /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> PS Dashboard</p> </Column>
            </Row>
            <hr />
              <Row className="display project_item">
              <Column small={3} large={3}>  <img className="project_icon" src = {WebApp} /> </Column>
              <Column small={9} large={9} className="project_desc">  <p className="project_title"> PS Dashboard</p> </Column>
              </Row>
              <hr />
                <Row className="display project_item">
                <Column small={3} large={3}>  <img className="project_icon" src = {WebApp} /> </Column>
                <Column small={9} large={9} className="project_desc">  <p className="project_title"> PS Dashboard</p> </Column>
                </Row>
                <hr />
        </div>
      </div>
    )
  }
});

module.exports = Projects;
