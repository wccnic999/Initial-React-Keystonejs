import * as React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

export default class Home extends React.Component {
  constructor(){
    super()

    this.state = {}
  }

  render(){
    return (
      <div>Home Page</div>
    )
  }
}

Home.propTypes = {}
