/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var ListaCursosPage = require('./components/ListaCursosPage.react');
ReactDOM.render(
  <ListaCursosPage />,
  document.getElementById('main')
);
