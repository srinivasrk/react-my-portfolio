var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
import welcome_carousel from './carousel_2.png';
import TextLoop from 'react-text-loop';
var ReactFitText = require('react-fittext');

var Home = createClass({
  render: function(){
    return(
      <div>
      <div className="carousel_container">
        <img className="carousel_image" src={welcome_carousel}></img>
      </div>

      <div className="header_text">

        <span className='intro_text' > Hi, I'm Srini & I am a </span>
        <br />
        <TextLoop speed={1500}>
                     <span className='detail_text' > full stack web developer </span>
                     <span  className='detail_text'> C# .NET application developer</span>
                     <span  className='detail_text'> Machine learning enthusiast</span>
                     <span  className='detail_text'> android applications developer</span>
                     <span className='detail_text'> I am a freelance developer</span>
                     <span  className='detail_text'> zen follower </span>
        </TextLoop>

      </div>

    </div>
    )
  }
});

module.exports = Home;
