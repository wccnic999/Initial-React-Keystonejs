import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet"

class PageTwo extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Page two | My site</title>
        </Helmet>
        <h1>This is page two</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  ...state,
  ...props
})

export default connect(mapStateToProps)(PageTwo)
