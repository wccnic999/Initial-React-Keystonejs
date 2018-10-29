import React, { Component } from 'react';

class Menu extends Component {
    constructor(){
      super()
    }
  
    render() {
      return (
          <div id="main-menu">
            <a href="/page-one">One</a>
            <a href="/page-two">Two</a>
            <a href="/page-three">Three</a>
            <a href="/page-four">Four</a>
          </div>
        )
    }
  }
  
  export default Menu