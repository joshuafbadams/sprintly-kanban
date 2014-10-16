var $ = require('jquery')
var React = require('react')
var Backbone = require('backdash')
Backbone.$ = $

var AppView = require('./views/app')
var sprintly = require('sprintly-data');


// Enable React dev tools
window.React = React

$(function() {
  // wat up, sync DOM APIs?
  var email = window.localStorage.getItem('email') || window.prompt('sprintly email:');
  var key = window.localStorage.getItem('key') || window.prompt('sprintly API key:');

  window.localStorage.setItem('email', email);
  window.localStorage.setItem('key', key);

  window.manifold = new AppView(sprintly.createClient(email, key))

})
