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
           <div className="overlay_education">

           </div> 
        </div>
    )
  }
});

module.exports = About;
