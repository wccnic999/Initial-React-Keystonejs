// globally import bootstrap
import React from 'react'
import { connect } from 'react-redux';
import { Route, Link, withRouter } from 'react-router-dom';
import { getScreenWidthAndHeight } from '../reducers/app/responsive';
//import { Helmet } from "react-helmet"

//import NavigationBar from './common/NavigationBar'
import Header from './common/header'
import PageOne from './pages/PageOne'
import PageTwo from './pages/PageTwo'

class App extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    this.props.getScreenWidthAndHeight();
    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
      this.props.getScreenWidthAndHeight();
  }

  render(){
    const { screen_width } = this.props;
    return (
        <div id="web-container">
          <Header/>
          <main id="page-wrap">
            <Route exact={true} path="/page-one" component={PageOne} />
            <Route exact={true} path="/page-two" componet={PageTwo}/>
          </main>
          <footer>

          </footer>
        </div>
    )
  }

  
}

const mapStateToProps = state => ({
  screen_width: state.app.responsive.width,
  screen_size_type: state.app.responsive.type,
});

const mapDispatchToProps = {
  getScreenWidthAndHeight,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
