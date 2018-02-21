var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
import profile_img from './about_me.png';
var {Row, Column} = require('react-foundation');
import Fader from 'react-fader';

var About = createClass({
  render: function(){
    return(
      <Fader>
        <div className="carousel_container">
          <img className="about_container" src ={profile_img} />
           <Row className="display">
           <Column large={3} className="overlay_education" >
              <p>Currently pursuing masters of engineering from University of Cincinnati</p>
            </Column>
            <Column large={3} className="overlay_experience" >
              <p>pursuing masters of engineering from University of Cincinnati</p>
            </Column>
            <Column large={3} className="overlay_personal" >
              <p>pursuing masters of engineering from University of Cincinnati</p>
            </Column>
          </Row>
        </div>
      </Fader>
    )
  }
});

module.exports = About;
