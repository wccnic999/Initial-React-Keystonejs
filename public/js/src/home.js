// globally import bootstrap
import React from 'react'
import ReactDOM, { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import appReducers from './reducers/app'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './containers/App'
import style from '../../styles/src/site.scss'

const reducer = combineReducers({
  app: appReducers,
})

// Grab the state from a global variable injected into the server-generated HTML
const preloaded_state = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// if (process.env.NODE_ENV !== 'production') {
  // middleware.push(createLogger())
// }


const store = createStore(
    reducer,
    compose(
      applyMiddleware(
          // Support thunked actions and react-router-redux
          thunk
      ),
      // Support the Chrome DevTools extension
      window.devToolsExtension && process.env.NODE_ENV !== 'production'
          ? window.devToolsExtension()
          : f => f
  )
)

// This is how you would trigger Ajax calls to fetch redux data
// store.dispatch({type: 'REQUEST_DOCUMENTS'})
// store.dispatch({type: 'REQUEST_USER'})
// store.dispatch({type: 'REQUEST_USERS'})

const render = Component => {
  const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate
  const NextApp = require('./containers/App').default
  renderMethod(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <NextApp/>
        </Router>
      </Provider>
    </AppContainer>, document.getElementById('App')
  )
}

render(App)

if(module.hot){
  module.hot.accept('./containers/App', () => { render(App) })
}
