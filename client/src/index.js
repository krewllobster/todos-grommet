import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import Root from './components/root/Root'
import 'semantic-ui-css/semantic.min.css';

let store = createStore(() => {})

render (
  <Root store={store} />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
