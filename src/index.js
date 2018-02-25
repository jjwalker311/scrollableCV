import React from 'react';
import { render } from 'react-dom'
import './index.css';
import CV from './container/CV';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combinedReducers from './reducers'

const store = createStore(combinedReducers)

render(
    <Provider store={store}>
      <CV />
    </Provider>,
    document.getElementById('root')
  )

registerServiceWorker();
