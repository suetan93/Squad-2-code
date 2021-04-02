const React = require('react');
const renderer = require('react-test-renderer');
const App = require('../components/App');

// import React from 'react';
// import renderer from 'react-test-renderer';
// import App from '../components/App';

//Does List render

it('renders the App Component', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

//Do items display
//Can we add items
//Can we remove items
//Can we edit items