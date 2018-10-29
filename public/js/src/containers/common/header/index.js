import React, { Component } from 'react'
import { connect } from 'react-redux'

import Menu from './Menu'
import MobileMenu from './MobileMenu'

class Header extends Component {
  render() {
    const { screen_width, screen_size_type } = this.props;
    console.log(screen_size_type);
    return (
      <div id="header">
        {screen_size_type === 'desktop'?
        <Menu/>
        :
        <MobileMenu/>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    screen_width: state.app.responsive.width,
    screen_size_type: state.app.responsive.type,
  })

export default connect(mapStateToProps)(Header)
