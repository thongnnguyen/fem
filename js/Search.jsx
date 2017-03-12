const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')

const { object, string } = React.PropTypes
const { connector } = require('./Store')

// stateful component NOW stateless
const Search = React.createClass({
  propTypes: {
    route: object,
    searchTerm: string
  },
  render () {
    return (
      <div className='container'>
        <Header showSearch />
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

// Above render function needs to be performant if there's for example 10,000 results
// Above filter function/map are implicit returns

// Above = same as below but below is ES6, DOES NOT have autobinding in React
// class Search extends React.Component {
// without autobinding e.g.
// constructor (props) {
//  super(props)
//  this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
// }
//   render () {
//     return (
//       <div className='container'>
//         <header className='header'>
//           <h1 className='brand'>Vidflix</h1>
//           <input className='search-input' type='text' placeholder='Search' />
//         </header>
//         <div className='shows'>
//           {data.shows.map((show) => (
//             <ShowCard {...show} key={show.imdbID} />
//           ))}
//         </div>
//       </div>
//     )
//   }
// }

module.exports = connector(Search)
