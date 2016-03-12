import React from 'react'
import ReactDOM from 'react-dom'
import d3 from 'd3'
import topojson from 'topojson'
import queue from 'queue-async'
import { App } from 'App'
import { countries } from './data/countries.js'
import WorldMap from './data/topo_worldMap.json'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers/index.js'

window.jQuery = window.$ = require("jquery")

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(rootReducer)
let rootElement = document.getElementById('root')

let loadApp = function(error, worldMap) {
  let feature = topojson.feature(worldMap, worldMap.objects['worldMap'])

  if (typeof document !== 'undefined'){
    ReactDOM.render(
      <Provider store={store}>
        <App countries={countries} feature={feature} />
      </Provider>,
      rootElement
    )
  }
}

queue()
  .defer(d3.json, WorldMap)
  .await(loadApp)
