var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
import profile_img from './about_me.png';
var {Row, Column} = require('react-foundation');
import GradIcon from './grad_icon.png';
import ExpIcon from './exp_icon.png';
import MeIcon from './me_icon.png';

var About = createClass({
  render: function(){
    return(
        <div className="carousel_container">
          <img className="about_container" src ={profile_img} />
           <Row className="display">
           <Column large={3} className="overlay_education" >
             <img className="icon_img" src={GradIcon} /> <span className="overlay_heading"> Education </span>
              <p>Masters of Engineering - Computer Science - University of Cincinnati - USA</p>
              <p>Bachelor of Engineering - Computer Science - India</p>
            </Column>
            <Column large={3} className="overlay_experience" >
              <img className="icon_img" src={ExpIcon} /> <span className="overlay_heading"> Professonal experience </span>
              <p> </p>
              <p> Sr. Analyst at Dell - EMC technologies</p>
              <p> Graduate Teaching Assistant / Grader at University of Cincinnati</p>
            </Column>
            <Column large={3} className="overlay_personal" >
              <img className="icon_img" src={MeIcon} /> <span className="overlay_heading"> Personal details </span>
              <p> Interested in Machine learning algorithms and experienced in R programming and shiny server </p>
              <p> I play video games !</p>
              <p> I learn new things everyday</p>
            </Column>
          </Row>
        </div>
    )
  }
});

module.exports = About;
