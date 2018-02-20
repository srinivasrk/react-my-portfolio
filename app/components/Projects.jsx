var React = require('react');
var createClass = require('create-react-class');
import Foundation from 'react-foundation';
var {Menu, MenuItem, Column, Thumbnail, Row,isColumn} = require('react-foundation');

var Projects = createClass({
  render:function(){
    return(
      // <div className="grid-block-example">
      //   <Row upOnSmall={1} upOnMedium={2} upOnLarge={3}>
      //     <Column isColumn>
      //       <Thumbnail src="//unsplash.it/300" alt=""/>
      //     </Column>
      //     <Column isColumn>
      //       <Thumbnail src="//unsplash.it/300" alt=""/>
      //     </Column>
      //     <Column isColumn>
      //       <Thumbnail src="//unsplash.it/300" alt=""/>
      //     </Column>
      //     <Column isColumn>
      //       <Thumbnail src="//unsplash.it/300" alt=""/>
      //     </Column>
      //     <Column isColumn>
      //       <Thumbnail src="//unsplash.it/300" alt=""/>
      //     </Column>
      //     <Column isColumn>
      //       <Thumbnail src="//unsplash.it/300" alt=""/>
      //     </Column>
      //   </Row>
      // </div>
      <h2> Project component</h2>
    )
  }
});

module.exports = Projects;
