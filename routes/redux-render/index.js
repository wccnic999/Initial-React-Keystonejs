

let handleRequest = async (req, res, next) => {
  // state will be the initial state used by the react app
  // it should most likely mirror the structure of the reducers
  let state = {
  }
  // call the render function which will actually call next so that our
  // css, html, and js can be set and passed to a pug template
  render(state, req, res, next)
}

module.exports = handleRequest
