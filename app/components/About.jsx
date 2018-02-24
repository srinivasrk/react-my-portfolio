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
              <p> <u> Masters of Engineering - Computer Science </u> - <a href = "http://www.uc.edu/edu/">
                <span className="highlight_text">University of Cincinnati </span></a> - USA - <span className="feature_highlight"> GPA : 3.75 </span></p>
              <p> <u> Bachelor of Engineering - Computer Science - India </u> - <span className="feature_highlight"> GPA : 81% </span> - <span className="prof_details"> Valedictorian of batch </span></p>
            </Column>
            <Column large={3} className="overlay_experience" >
              <img className="icon_img" src={ExpIcon} /> <span className="overlay_heading"> Professonal experience </span>
              <p> </p>
              <p> <u> Sr. Analyst at Dell - EMC technologies </u> - <span className="prof_details"> Experienced in Test driven development, Python API development and SAN experience. Knowledge on storage arrays, data administration and switch configurations.</span></p>
              <p> <u> Graduate Teaching Assistant / Grader at University of Cincinnati </u> - <span className="prof_details"> Grade students homework and lab which is mostly written in MATLAB. Check for bugs in MATLAB code. </span></p>
            </Column>
            <Column large={3} className="overlay_personal" >
              <img className="icon_img" src={MeIcon} /> <span className="overlay_heading"> Personal details </span>
              <p> <u> Machine learning and Data Analysis </u> - <span className="prof_details"> Active participation in kaggle competations and pet projects in R. </span> I learn new things everyday! <span className="prof_details"> ReactJS, ReactNative, GraphQL, other JS libraries. </span></p>
              <p> I play video games! - <span className="prof_details"> Civilization 6, Defense of the Ancients (DOTA), etc. </span> Zen follower <span className="prof_details"> I am an avid zen follower and trying to be minimalist ! </span>
              </p>
            </Column>
          </Row>
        </div>
    )
  }
});

module.exports = About;
