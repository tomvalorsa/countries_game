import React from 'react'
import d3 from 'd3'
import topojson from 'topojson'
import queue from 'queue-async'
import { App } from 'App'
import { countries } from './data/countries.js'
import WorldMap from './data/topo_worldMap.json'

window.jQuery = window.$ = require("jquery")

let loadApp = function(error, worldMap) {
  let feature = topojson.feature(worldMap, worldMap.objects['worldMap'])

  if (typeof document !== 'undefined'){
    React.render(<App countries={countries} feature={feature} />, document.body)
  }
}

queue()
  .defer(d3.json, WorldMap)
  .await(loadApp)

// http://bost.ocks.org/mike/map/