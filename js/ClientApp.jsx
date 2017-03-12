const React = require('react')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')

// this
const ReactRouter = require('react-router')
const { Router, Route, IndexRoute, hashHistory } = ReactRouter

// or this?
// const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const { store } = require('./Store')
const { Provider } = require('react-redux')

// var MyTitle = require('./MyTitle')
// var MyTitleFact = React.createFactory(MyTitle)
// var ce = React.createElement

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/details/:id' component={Details} />
          </Route>
        </Router>
      </Provider>
    )
  }
})
// VS
// var App = () => (
//     <div>
//       <MyTitle title='whatevs' color='rebeccapurple' />
//       <MyTitle title='LOL' color='papayawhip' />
//       <MyTitle title='OMGLOLWTFBBQ' color='#f06d06' />
//     </div>
// )

module.exports = App
