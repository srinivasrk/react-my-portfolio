var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
var {Menu, MenuItem, Column, Thumbnail, Row,isColumn} = require('react-foundation');
import MoreDetails from './more_details.png';
import LinkedInLogo from './linkedin_logo.png';

var Details = createClass({
  render:function(){
    return(
      <div className="carousel_container">
        <img className="about_container" src ={MoreDetails} />
        <div className="project_container">
          <p className="details_title"> Lets get in touch </p>
          <p className="details_SmallPara"> I can help you build your next idea!</p>
          <p className="details_SmallPara"> You can reach me at srinivasrk92@gmail.com </p>
          <p> Bitbucket, LinkedIn, tech stack I work on </p>
          <img src={LinkedInLogo} className="tiny_logos" />
        </div>
      </div>
    )
  }
});

module.exports = Details;
