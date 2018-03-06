var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
var {Menu, MenuItem, Column, Thumbnail,Column, Row,isColumn} = require('react-foundation');
import ProjectImage from './project_background.png';
import WebApp from './web-app.png';
import AndroidLogo from './android_logo.png';
import PythonLogo from './python_logo.png';
import CSharpLogo from './c_sharp_logo.png';
import RLogo from './r_logo.png';
var Projects = createClass({
  render:function(){
    return(
      <div className="carousel_container">
        <img className="about_container" src ={ProjectImage} />
        <div className="project_container">
          <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {WebApp} /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> PS Dashboard</p>
              <p> Content management system for internal EMC was a vital tool for managing documents, videos and webex recordings.
                With MySQL database and HTML framework the application was built out to enable data sharing with ease. </p>
            </Column>

          </Row>
          <hr />
          <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {AndroidLogo} /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> Android - Feast of Fest</p>
              <p> This android application hosts the events and fests which are conducted across the city. We gather info from various resources and manage the registration and help you get the right information about the events.
                Developed with native android technology & PHP-MySQL backend this application has over 2000+ downloads. </p>
            </Column>
          </Row>
          <hr />
          <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {PythonLogo} /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> Python API development</p>
              <p> ViPR controller is EMC storage provisioning product which works across EMC and 3rd party device.
                The drawback is creating device or volume is manual, if you had to create
                500 volumes of different size and names then ViPR does not have a built in functionality to do so.
                which makes the task very tedious.This python application takes an Excel as input which
                has all the details of Luns and Names of hosts to be added to ViPR and using API programming with Python,
                we send the requests to the ViPR server.This has reduced almost 75% of time on creating 585 volumes in a
                 production environment </p>
            </Column>
          </Row>
          <hr />
          <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {CSharpLogo}  /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> C# - XtremIO Migration Assistant</p>
              <p> This application is built on C# and .Net, with XtremIO Migration assistant the cost of migration from any 3rd party device or EMC array to XtremIO is reduced. The overall efficiency of migration is improved with automated scripts generation. With back end SQLite this stand alone application has a user-base across the globe. </p>
            </Column>
          </Row>
          <hr />

          <Row className="display project_item">
            <Column small={3} large={3}>  <img className="project_icon" src = {RLogo} /> </Column>
            <Column small={9} large={9} className="project_desc">  <p className="project_title"> R - Programming - Recommender System</p>
              <p> Recommender systems are machine learning techniques to provide recommendation based on exisiting data In this project we will understand the working of "RecommenderLab" and perform an User Based Collaborative Filtering with R and Postgres </p>
            </Column>
          </Row>
          <hr />
        </div>
      </div>
    )
  }
});

module.exports = Projects;
