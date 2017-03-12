const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')

// this
const ReactRouter = require('react-router')
const { Router, Route, IndexRoute, hashHistory } = ReactRouter

// or this?
// const { Router, Route, IndexRoute, hashHistory } = require('react-router')

const { shows } = require('../public/data')
const { store } = require('./Store')
const { Provider } = require('react-redux')

// var MyTitle = require('./MyTitle')
// var MyTitleFact = React.createFactory(MyTitle)
// var ce = React.createElement

const App = React.createClass({
  assignShow (nextState, replace) {
    const showArray = shows.filter((show) => show.imdbID === nextState.params.id)
    if (showArray.length < 1) {
      return replace('/')
    }

    Object.assign(nextState.params, showArray[0])
    return nextState
  },
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Landing} />
            <Route path='/search' component={Search} shows={shows} />
            <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
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

ReactDOM.render(<App />, document.getElementById('app'))
