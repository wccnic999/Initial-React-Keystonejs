import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet"

class PageOne extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Page One | My site</title>
        </Helmet>
        <h1>This is page one</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  ...state,
  ...props
})

export default connect(mapStateToProps)(PageOne)
