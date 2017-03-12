require('babel-register')
require('babel-polyfill')

// jsdom similar to phantom but quicker doesnt load a browser, creates a browser 
// like environment
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
