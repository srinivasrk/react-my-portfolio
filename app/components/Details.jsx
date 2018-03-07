var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
var {Menu, MenuItem, Column, Thumbnail, Row,isColumn} = require('react-foundation');
import MoreDetails from './more_details.png';
import LinkedInLogo from './linkedin_logo.png';
import EmailLogo from './tiny_email_logo.png';
import BitbucketLogo from './bitbucket_logo.png';
import CVLogo from './cv_logo.png';

var Details = createClass({
  render:function(){
    return(
      <div className="carousel_container">
        <img className="about_container" src ={MoreDetails} />
        <div className="project_container">
          <p className="details_title"> Lets get in touch </p>
          <div className="logo_list">
            <a href="https://www.linkedin.com/in/srini-cincy/" target="_blank"><img src={LinkedInLogo} className="linkedin_logo" /></a>
            <a href="mailto:srinivasrk92@gmail.com"><img src={EmailLogo} className="email_logo" /></a>
            <a href="https://bitbucket.org/srinivasrk" target="_blank"><img src={BitbucketLogo} className="bitbucket_logo" /></a>
            <a href="https://1drv.ms/b/s!Al61Meua1OkRgYkgo786XFUnACl5sw" target="_blank"><img src={CVLogo} className="cv_logo" /></a>
          </div>
          <p className="my_desc_2">
            I am currently looking for internships / full time positions starting summer 2018.
            My area of expertise includes android, C# .NET, ASP.NET, HTML, CSS, JavaScript, React, PHP, Python.
            I have also worked on machine learning libraries using R programming & have knowledge on probabilistic models and statistical modelling
          </p>
        </div>
      </div>
    )
  }
});

module.exports = Details;
