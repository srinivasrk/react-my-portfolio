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
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> PS Dashboard</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tortor ac metus venenatis placerat
                non a lorem. Ut nec ex lobortis, tempus mauris nec, sodales turpis. Vivamus commodo eros at semper facilisis.
                Proin interdum, arcu nec rutrum suscipit,
                nisi dui lacinia tellus, nec bibendum mauris orci eget ante. Vestibulum laoreet eget nisi in auctor. </p>
            </Column>

          </Row>
          <hr />
          <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {WebApp} /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> Android - Feast of Fest</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tortor ac metus venenatis placerat
                non a lorem. Ut nec ex lobortis, tempus mauris nec, sodales turpis. Vivamus commodo eros at semper facilisis.
                Proin interdum, arcu nec rutrum suscipit,
                nisi dui lacinia tellus, nec bibendum mauris orci eget ante. Vestibulum laoreet eget nisi in auctor. </p>
            </Column>
          </Row>
          <hr />
          <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {WebApp} /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> Python API development</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tortor ac metus venenatis placerat
                non a lorem. Ut nec ex lobortis, tempus mauris nec, sodales turpis. Vivamus commodo eros at semper facilisis.
                Proin interdum, arcu nec rutrum suscipit,
                nisi dui lacinia tellus, nec bibendum mauris orci eget ante. Vestibulum laoreet eget nisi in auctor. </p>
            </Column>
          </Row>
          <hr />
          <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {WebApp} /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> C# - XtremIO Migration Assistant</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tortor ac metus venenatis placerat
                non a lorem. Ut nec ex lobortis, tempus mauris nec, sodales turpis. Vivamus commodo eros at semper facilisis.
                Proin interdum, arcu nec rutrum suscipit,
                nisi dui lacinia tellus, nec bibendum mauris orci eget ante. Vestibulum laoreet eget nisi in auctor. </p>
            </Column>
          </Row>
          <hr />

          <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {WebApp} /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> R - Programming - Recommender System</p>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in tortor ac metus venenatis placerat
                  non a lorem. Ut nec ex lobortis, tempus mauris nec, sodales turpis. Vivamus commodo eros at semper facilisis.
                  Proin interdum, arcu nec rutrum suscipit,
                  nisi dui lacinia tellus, nec bibendum mauris orci eget ante. Vestibulum laoreet eget nisi in auctor. </p>
            </Column>
          </Row>
          <hr />
        </div>
      </div>
    )
  }
});

module.exports = Projects;
