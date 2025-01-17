var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
import profile_img from './about_me.png';
var {Row, Column} = require('react-foundation');
import GradIcon from './grad_icon.png';
import ExpIcon from './exp_icon.png';
import MeIcon from './me_icon.png';
import MyImg from './profile_crop.png';

var About = createClass({
  render: function(){
    return(
        <div className="carousel_container">
          <img className="about_container" src ={profile_img} />
           <div className="overlay_education">
            <img src={MyImg} className="profile_img" ></img>
            <p className="my_desc">
              “Anyone can write code that a computer can understand. Good programmers write code that humans can understand.”  ― Martin Fowler
              <br />
              <br />
              </p>
            <p className="my_desc_2">
              I am a programmer by heart and soul, I am obsessed with learning new technologies and tinkering around with new frameworks.
              I graduated bachelors with honors in 2014 and started my professional career at EMC. Currently I am pursuing masters from University of Cincinnati.

            </p>
            <p className="my_desc_2">
              I worked on technologies like .NET, C# windows application development. I am also experienced in
              ASP.NET and web development using jQuery, NodeJS, ExpressJS & React.
              I currently work as an MATLAB teaching assistant for University of Cincinnati

            </p>
           </div>
        </div>
    )
  }
});

module.exports = About;
