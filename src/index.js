import React from 'react'
import d3 from 'd3'
import topojson from 'topojson'
import queue from 'queue-async'
import { App } from 'App'
import { countries } from './data/countries.js'
import WorldMap from './data/topo_worldMap.json'

window.jQuery = window.$ = require("jquery")

let loadApp = function(error, worldMap) {
  let polygons = topojson.feature(worldMap, worldMap.objects['worldMap']).features

  if (typeof document !== 'undefined'){
    React.render(<App countries={countries} polygons={polygons} />, document.body)
  }
}

queue()
  .defer(d3.json, WorldMap)
  .await(loadApp)
