var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
import profile_img from './about_me.png';


var About = createClass({
  render: function(){
    return(
      <div className="carousel_container">
        <img className="about_container" src ={profile_img} />
      </div>
    )
  }
});

module.exports = About;
