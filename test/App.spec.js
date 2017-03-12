/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const { shallow, mount } = require('enzyme')
const { shows } = require('../public/data')
const { store, rootReducer } = require('../js/Store')

xdescribe('<Search /> component test', () => {
  // xit won't run test e.g xit('should ...')
  it('should render the brand', () => {
    // console.log(wrapper.debug()) returns the HTML
    // just test what's in search as below:
    const wrapper = shallow(<Search />)
    // contains is part of enzyme
    expect(wrapper.contains(<h1 className='brand'>Vidflix</h1>)).to.be.true
  })

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find(ShowCard).length).to.equal(shows.length)
  })

  it('should filter correctly given new state', () => {
    // mount allows for interaction over shallow but is slower
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT' })
    expect(state).to.deep.equal({ searchTerm: '' })
  })

  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({ searchTerm: 'some random string' }, { type: 'setSearchTerm', value: 'correct string'})
    expect(state).to.deep.equal({ searchTerm: 'correct string' })
  })
})


// npm i -g nyc
// then run nyc --reporter=lcov --reporter=text --reporter=html --require babel-register --extension .jsx npm test
// to test code coverage then open file in nyc-output in browser to see where code didn't run
