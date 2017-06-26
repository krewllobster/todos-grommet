import React from 'react';
import { render } from 'react-dom'
import Root from './Root'
import store from './Store'
import 'semantic-ui-css/semantic.min.css'

render (
  <Root store={store} />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
